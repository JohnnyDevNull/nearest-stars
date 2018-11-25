import { BaseRestModel, UserGroupModel, UserModel } from '@nearest-stars/data-models';
import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import * as HttpStatus from 'http-status-codes';
import { getConnection, DeleteResult } from 'typeorm';
import { getError, isEmptyStr } from '../functions';

export class UserGroupController {

  public getUserGroups = async (req: Request, res: Response) => {
    const connection = getConnection();
    const userGrupRepo = connection.getRepository<UserModel>('UserGroup');
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
    const userGroup: UserGroupModel = {};

    try {
      const {name, type} = req.body;
      userGroup.name = name;
      userGroup.type = type;
      console.log(req.body);
      if (!name) {
        throw new Error('Missing field name');
      }
    } catch (error) {
      (<any>error).status = '400';
      next(error);
      return;
    }

    let resSave: UserGroupModel;

    try {
      const connection = getConnection();
      const userGroupRepo = connection.getRepository<UserGroupModel>('UserGroup');

      const groupExists =  await userGroupRepo.findOne({name: userGroup.name});
      if (groupExists !== undefined) {
        throw new Error('User with username already exists!');
      }

      resSave = await userGroupRepo.save(userGroup);
    } catch ( error ) {
      return next(getError(HttpStatus.OK, error.message));;
    }

    const result: BaseRestModel<UserGroupModel> = {
      meta: {
        code: 0,
        message: 'createUserGroup success'
      },
      data: resSave
    };
    res.json(result);
  }

  public getUserGroupById = async (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;

    const connection = getConnection();
    const userGroupRepo = connection.getRepository<UserGroupModel>('UserGroup');
    const userGroup = await userGroupRepo.findOne({id: groupId});

    if (!userGroup) {
      next(new Error('Unknown group!'));
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getUserGroupById success!'
      },
      data: userGroup
    };
    res.json(result);
  }

  public updateUserGroupById = async (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;

    let resSave: UserGroupModel = {};

    try {
      const connection = getConnection();
      const userGroupRepo = connection.getRepository<UserGroupModel>('UserGroup');
      const userGroup = await userGroupRepo.findOne({id: groupId});

      if (!userGroup) {
        throw new Error('Unknown group!');
      }

      const {name, type, activated} = req.body;

      if (!isEmptyStr(name) && name !== userGroup.name) {
        userGroup.name = name;
      }

      if (!isEmptyStr(type) && type !== userGroup.type) {
        userGroup.type = type;
      }

      if (+activated >= 0) {
        userGroup.activated = +activated === 0 ? false : true;
      } else if (typeof activated === 'boolean') {
        userGroup.activated = activated;
      }

      if (userGroup.activated && userGroup.activatedAt === null) {
        userGroup.activatedAt = new Date();
      }

      resSave = await userGroupRepo.save(userGroup);
    } catch(error) {
      (<any>error).status = '400';
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateUserGroupById success!'
      },
      data: resSave
    };
    res.json(result);
  }

  public deleteUserGroupById = async (req: Request, res: Response, next: NextFunction) => {
    const groupId = req.params.groupId;
    let resDel: DeleteResult;

    try {
      const userGroupRepo = getConnection().getRepository<UserGroupModel>('UserGroup');
      resDel = await userGroupRepo.delete({id: groupId});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteUserGroupById success!'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.json(result);
  }
}
