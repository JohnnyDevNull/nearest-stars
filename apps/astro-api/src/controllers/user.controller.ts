import { BaseRestModel, UserModel } from '@nearest-stars/data-models';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import * as HttpStatus from 'http-status-codes';
import { DeleteResult, getConnection } from 'typeorm';
import { config } from '../config';
import { getError } from '../functions';

export class UserController {

  public getUsers = async (req: Request, res: Response) => {
    const connection = getConnection();
    const userRepo = connection.getRepository<UserModel>('User');
    const users = await userRepo.find({
      select: [
        'id',
        'username',
        'email',
        'activated',
        'activatedAt',
        'createdAt',
        'updatedAt',
        'locked',
        'lockedAt'
      ]
    });
    const result: BaseRestModel<UserModel[]> = {
      meta: {
        code: 0,
        message: 'getUsers success!'
      },
      data: users
    };
    res.json(result);
  }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {

    let user: UserModel;

    try {
      const {username, email, password} = req.body;
      const passwordHash = await this.genPassword(password);

      user = {
        username: username,
        email: email,
        password: passwordHash
      };
    } catch ( error ) {
      const err = new Error('Missing user field data');
      (<any>err).status = '400';
      next(err);
      return;
    }

    let resSave: UserModel;

    try {
      const connection = getConnection();
      const userRepo = connection.getRepository<UserModel>('User');

      let userExists =  await userRepo.findOne({username: user.username});
      if (userExists !== undefined) {
        throw new Error('User with username already exists!');
      }

      userExists =  await userRepo.findOne({email: user.email});
      if (userExists !== undefined) {
        throw new Error('User with email already exists!');
      }

      resSave = await userRepo.save(user);
    } catch ( error ) {
      return next(getError(HttpStatus.OK, error.message));;
    }

    const result: BaseRestModel<{userId: number}> = {
      meta: {
        code: 0
      },
      data: {
        userId: resSave.id
      }
    };
    res.json(result);
  }

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    let user: UserModel = {};

    try {
      const userId = +req.params.userId;
      if (!userId || typeof userId !== 'number') {
        throw new Error('Invalid userId given');
      }
      const userRepo = getConnection().getRepository<UserModel>('User');
      user = await userRepo.findOne({
        select: [
          'id',
          'username',
          'email',
          'activated',
          'activatedAt',
          'createdAt',
          'updatedAt',
          'locked',
          'lockedAt'
        ],
        where: {
          id: userId
        }
      });
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getUserById success!'
      },
      data: user
    };
    res.json(result);
  }

  public updateUserById = async (req: Request, res: Response, next: NextFunction) => {
    let user: UserModel = {};
    let resSave: UserModel = {};

    try {
      const {id, username, password, email, activated, locked} = req.body;

      if (!id) {
        throw new Error('missing field userId in request body');
      }

      const userRepo = getConnection().getRepository<UserModel>('User');
      user = await userRepo.findOne({id: id});

      if (!user) {
        throw new Error('Unknown user');
      }

      if (password !== undefined && password.length > 0) {
        user.password = await this.genPassword(password);
      }

      user.username = username;
      user.email = email;

      if (activated !== undefined && +activated !== +user.activated) {
        user.activated = +activated === 0 ? false : true;
        if (user.activated && user.activatedAt === null) {
          user.activatedAt = new Date();
        } else {
          user.activatedAt = null;
        }
      }

      if (locked !== undefined && +locked !== +user.locked) {
        user.locked = +locked === 0 ? false : true;
        if (user.locked) {
          user.lockedAt = new Date();
        }
      }

      resSave = await userRepo.save(user);
      delete resSave.password;
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateUserById success!'
      },
      data: resSave
    };
    res.json(result);
  }

  public deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    let resDel: DeleteResult;

    try {
      const userRepo = getConnection().getRepository<UserModel>('User');
      resDel = await userRepo.delete({id: userId});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteUserById success!'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.json(result);
  }

  private async genPassword(password: string): Promise<string> {
    const saltRounds = config.saltRounds;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  }
}
