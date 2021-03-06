import { ApiAuthConfig as config } from '@nearest-stars/config';
import { Helpers } from '@nearest-stars/ep-core';
import { BaseRestModel, TokenResponseModel, UserModel } from '@nearest-stars/schema';
import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import { getConnection } from 'typeorm';

export class TokenController {

  public getTokenInfo = (req: Request, res: Response) => {
    const result: BaseRestModel<{user: UserModel}> = {
      meta: {
        code: HttpStatus.OK,
        message: ''
      },
      data: {
        user: (<any>req).user
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createToken = async (req: Request, res: Response, next: NextFunction) => {

    const {email, password} = req.body;
    let user: UserModel;

    if (!password || !email) {
      return next(Helpers.getError(HttpStatus.OK, 'Email or password is missing!'));
    }

    const connection = getConnection();
    const userRepo = connection.getRepository<UserModel>('User');

    if (email) {
      user = await userRepo.findOne({
        where: { email: email }
      });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return next(Helpers.getError(HttpStatus.OK, 'Unknown user or wrong password!'));
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
      meta: {
        code: HttpStatus.CREATED,
        message: 'The token was created successfully!'
      },
      data: {
        token: token,
        expiresAt: (<any>payload).exp,
        userId: user.id,
        username: user.username,
        activated: user.activated,
        locked: user.locked
      }
    };

    res.statusCode = HttpStatus.CREATED;
    res.json(result);
  }

  public updateToken = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The token has been updated successfully!'
      },
      data: {}
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }

  public deleteToken = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The token was deleted successfully!'
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
      throw Helpers.getError(HttpStatus.UNAUTHORIZED, 'Invalid Token');
    }
  }
}
