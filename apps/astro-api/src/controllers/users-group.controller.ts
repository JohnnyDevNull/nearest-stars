import { BaseRestModel, UserModel } from '@nearest-stars/data-models';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import { getConnection } from 'typeorm';
import * as HttpStatus from 'http-status-codes';
import { getError } from '../functions';
import { config } from '../config';

export class UsersGroupController {

  public getUserGroups = async (req: Request, res: Response) => {
    const connection = getConnection();
    const userGrupRepo = connection.getRepository<UserModel>('CmsUserGroup');
    const groups = await userGrupRepo.find();
    const result: BaseRestModel<UserModel[]> = {
      meta: {
        code: 0,
        message: 'getUserGroups success!'
      },
      data: groups
    };
    res.json(result);
  }

  public createUserGroup = async (req: Request, res: Response, next: NextFunction) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'createUserGroup success'
      },
      data: {}
    };
    res.json(result);
  }

  public getUserGroupById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getUserGroupById success!'
      }
    };
    res.json(result);
  }

  public updateUserGroupById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateUserGroupById success!'
      }
    };
    res.json(result);
  }

  public deleteUserGroupById = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteUserGroupById success!'
      }
    };
    res.json(result);
  }
}
