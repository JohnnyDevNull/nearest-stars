import { BaseRestModel, CmsArticleModel } from '@nearest-stars/schema';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { DeleteResult, getConnection } from 'typeorm';

export class ArticleController {

  public getArts = async (req: Request, res: Response) => {
    const connection = getConnection();
    const artRepo = connection.getRepository<CmsArticleModel>('CmsArticle');
    const arts = await artRepo.find();

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.OK,
        message: ''
      },
      data: arts
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createArt = async (req: Request, res: Response, next: NextFunction) => {

    let resSave: CmsArticleModel = null;

    try {
      const {title, subtitle, alias, text, published, locked} = req.body;

      const connection = getConnection();
      const artRepo = connection.getRepository<CmsArticleModel>('CmsArticle');
      let arts = await artRepo.findOne({where: { title: title }});

      if (arts) {
        throw new Error('Entity already exists with title "' + title + '"');
      }

      arts = await artRepo.findOne({where: { alias: alias }});

      if (arts) {
        throw new Error('Entity already exists with alias "' + alias + '"');
      }

      const art: CmsArticleModel = {};
      art.title = title;
      art.subtitle = subtitle;
      art.alias = alias;
      art.text = text;

      if (published !== undefined) {
        art.published = published;
        if (+art.published) {
          art.publishedAt = new Date();
        }
      }

      if (locked !== undefined) {
        art.locked = locked;
        if (+art.locked) {
          art.lockedAt = new Date();
        }
      }

      resSave = await artRepo.save(art);
    } catch (error) {
      error.status = 400;
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.CREATED,
        message: 'The article was created successfully!'
      },
      data: resSave.id
    };
    res.statusCode = HttpStatus.CREATED;
    res.json(result);
  }

  public getArtById = async (req: Request, res: Response, next: NextFunction) => {
    let art: CmsArticleModel = {};

    try {
      const artId = +req.params.artId
      if (!artId || typeof artId !== 'number') {
        throw new Error('Invalid artId given');
      }

      const artRepo = getConnection().getRepository<CmsArticleModel>('CmsArticle');
      art = await artRepo.findOne({where: { id: artId }});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.OK,
        message: ''
      },
      data: art
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public updateArtById = async (req: Request, res: Response, next: NextFunction) => {
    let art: CmsArticleModel = {};
    let resSave: CmsArticleModel = {};

    try {
      const artId = +req.params.artId;
      if (!artId || typeof artId !== 'number') {
        throw new Error('Invalid artId given');
      }

      const {id, title, subtitle, alias, text, published, locked} = req.body;

      if (!id) {
        throw new Error('missing field artId in request body');
      }

      if (+id !== +artId) {
        throw new Error('request art id and body missmatch');
      }

      const artRepo = getConnection().getRepository<CmsArticleModel>('CmsArticle');
      art = await artRepo.findOne({id: id});

      if (!art) {
        throw new Error('Unknown art');
      }

      art.title = title;
      art.subtitle = subtitle;
      art.alias = alias;
      art.text = text;

      if (published !== undefined && +published !== +art.published) {
        art.published = +published !== 0;
        if (art.published) {
          art.publishedAt = new Date();
        } else {
          art.publishedAt = null;
        }
      }

      if (locked !== undefined && +locked !== +art.locked) {
        art.locked = +locked !== 0;
        if (art.locked) {
          art.lockedAt = new Date();
        }
      }

      resSave = await artRepo.save(art);
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The article has been updated successfully!'
      },
      data: resSave
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }

  public deleteArtByID = async (req: Request, res: Response, next: NextFunction) => {
    const artId = req.params.artId;
    let resDel: DeleteResult;

    try {
      const userRepo = getConnection().getRepository<CmsArticleModel>('CmsArticle');
      resDel = await userRepo.delete({id: artId});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The article was deleted successfully!'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }
}
