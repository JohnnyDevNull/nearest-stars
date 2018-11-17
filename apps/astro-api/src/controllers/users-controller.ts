import { BaseRestModel, UserModel } from '@nearest-stars/data-models';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import { getConnection } from 'typeorm';
import { config } from './../config';

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
      const plainPassword = req.body.password;
      const saltRounds = config.saltRounds;
      const salt = await bcrypt.genSalt(saltRounds);
      const passwordHash = await bcrypt.hash(plainPassword, salt);

      user = {
        username: req.body.username,
        email: req.body.email,
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
      resSave = await userRepo.save(user);
    } catch ( error ) {
      const err = new Error(error.message);
      (<any>err).status = '400';
      next(err);
      return;
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
