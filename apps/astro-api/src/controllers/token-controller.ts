import { BaseRestModel, UserModel } from '@nearest-stars/data-models';
import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getConnection } from 'typeorm';
import * as HttpStatus from '../../../../node_modules/http-status-codes';
import { config } from '../config';
import { getError } from '../functions';
import { TokenResponseModel } from '../models/token-response.model';

export class TokenController {

  public getTokenInfo = (req: Request, res: Response) => {
    const result: BaseRestModel<{user: UserModel}> = {
      meta: {
        code: 0,
        message: 'getTokenInfo success!'
      },
      data: {
        user: (<any>req).user
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createToken = async (req: Request, res: Response, next: NextFunction) => {

    const plainPassword: String = req.body.password;
    const userName: String = req.body.userName;
    const email: String = req.body.email;
    let user: UserModel;

    if (!plainPassword) {
      return next(getError(HttpStatus.OK, 'password is missing'));
    }

    if (!email && !userName) {
      return next(getError(HttpStatus.OK, 'email or userName is missing'));
    }

    const connection = getConnection();
    const userRepo = connection.getRepository<UserModel>('User');

    if (email) {
      user = await userRepo.findOne({
        where: { email: email }
      });
    } else if (userName) {
      user = await userRepo.findOne({
        where: { userName: userName }
      });
    }

    if (!user) {
      return next(getError(HttpStatus.OK, 'unknown user'));
    }

    if (!bcrypt.compareSync(plainPassword, user.password)) {
      return next(getError(HttpStatus.OK, 'wrong password'));
    }

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.activatedAt;
    delete user.lockedAt;

    const token = jwt.sign(
      { user },
      config.jwtSecret,
      {
        issuer: config.jwtIssuer,
        expiresIn: config.jwtExpTime,
        subject: String(user.id)
      }
    );
    const payload = jwt.decode(token, { json: true });

    const result: BaseRestModel<TokenResponseModel> = {
      meta: { code: HttpStatus.CREATED },
      data: {
        token: token,
        expiresAt: (<any>payload).exp,
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        userName: user.username,
        activated: user.activated,
        locked: user.locked
      }
    };

    // res.cookie('SESSIONID', token, {httpOnly: true, secure: true});
    // res.cookie('SESSIONID', token);
    res.statusCode = HttpStatus.CREATED;
    res.json(result);
  }

  public updateToken = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateToken success!'
      },
      data: {}
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }

  public deleteToken = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteToken success!'
      }
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }

  public verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
      // split at the space
      const bearer = (<string>bearerHeader).split(' ');
      // get the token from the array
      const bearerToken = bearer[1];
      // verify set the decoded user request data
      (<any>req).user = jwt.verify(bearerToken, config.jwtSecret);
      // call the next middleware
      next();
    } else {
      throw getError(HttpStatus.UNAUTHORIZED, 'Invalid Token');
    }
  }
}
