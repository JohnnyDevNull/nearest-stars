import { BaseRestModel, UserModel } from '@nearest-stars/data-models';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import { getConnection } from 'typeorm';
import * as HttpStatus from 'http-status-codes';
import { getError } from '../functions';
import { config } from '../config';

export class UsersController {

  public getUsers = async (req: Request, res: Response) => {
    const connection = getConnection();
    const userRepo = connection.getRepository<UserModel>('User');
    const users = await userRepo.find();
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

      const saltRounds = config.saltRounds;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(password, salt);

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

  public getUserById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getUserById success!'
      }
    };
    res.json(result);
  }

  public updateUserById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateUserById success!'
      }
    };
    res.json(result);
  }

  public deleteUserById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteUserById success!'
      }
    };
    res.json(result);
  }
}
