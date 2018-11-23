import { BaseRestModel } from '@nearest-stars/data-models';
import { Request, Response } from 'express';
import { environment } from '../environments/environment';

export class IndexController {
  public getIndex (req: Request, res: Response) {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'The api is online! Version: ' + environment.version,
      }
    };
    res.json(result);
  }
}
