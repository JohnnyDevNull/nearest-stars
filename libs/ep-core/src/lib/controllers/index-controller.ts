import { BaseRestModel } from '@nearest-stars/schema';
import { Request, Response } from 'express';

export class IndexController {
  public getIndex (req: Request, res: Response) {
    const result: BaseRestModel<{}> = {
      meta: {
        code: 0,
        message: 'The api is online!'
      },
      data: {
      }
    };
    res.json(result);
  }
}
