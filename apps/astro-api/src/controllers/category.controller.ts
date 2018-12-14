import { BaseRestModel, CmsCategoryModel } from '@nearest-stars/data-models';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { DeleteResult, getConnection } from 'typeorm';

export class CategoryController {

  public getCats = async (req: Request, res: Response) => {
    const connection = getConnection();
    const catRepo = connection.getRepository<CmsCategoryModel>('CmsCategory');
    const cats = await catRepo.find();

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.OK,
        message: ''
      },
      data: cats
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createCat = async (req: Request, res: Response, next: NextFunction) => {

    let resSave: CmsCategoryModel = null;

    try {
      const {title, subtitle, alias, text, published, locked} = req.body;

      const connection = getConnection();
      const catRepo = connection.getRepository<CmsCategoryModel>('CmsCategory');
      let cats = await catRepo.findOne({where: { title: title }});

      if (cats) {
        throw new Error('Entitiy already exists with title "' + title + '"');
      }

      cats = await catRepo.findOne({where: { alias: alias }});

      if (cats) {
        throw new Error('Entitiy already exists with alias "' + alias + '"');
      }

      const cat: CmsCategoryModel = {};
      cat.title = title;
      cat.subtitle = subtitle;
      cat.alias = alias;
      cat.text = text;

      if (published !== undefined) {
        cat.published = published;
        if (+cat.published) {
          cat.publishedAt = new Date();
        }
      }

      if (locked !== undefined) {
        cat.locked = locked;
        if (+cat.locked) {
          cat.lockedAt = new Date();
        }
      }

      resSave = await catRepo.save(cat);
    } catch (error) {
      error.status = 400;
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.CREATED,
        message: 'The category was created successfully!'
      },
      data: resSave.id
    };
    res.statusCode = HttpStatus.CREATED;
    res.json(result);
  }

  public getCatById = async (req: Request, res: Response, next: NextFunction) => {
    let cat: CmsCategoryModel = {};

    try {
      const catId = +req.params.catId
      if (!catId || typeof catId !== 'number') {
        throw new Error('Invalid catId given');
      }

      const catRepo = getConnection().getRepository<CmsCategoryModel>('CmsCategory');
      cat = await catRepo.findOne({where: { id: catId }});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.OK,
        message: ''
      },
      data: cat
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public updateCatById = async (req: Request, res: Response, next: NextFunction) => {
    let cat: CmsCategoryModel = {};
    let resSave: CmsCategoryModel = {};

    try {
      const catId = +req.params.catId;
      if (!catId || typeof catId !== 'number') {
        throw new Error('Invalid catId given');
      }

      const {id, title, subtitle, alias, text, published, locked} = req.body;

      if (!id) {
        throw new Error('missing field catId in request body');
      }

      if (+id !== +catId) {
        throw new Error('request cat id and body missmatch');
      }

      const catRepo = getConnection().getRepository<CmsCategoryModel>('CmsCategory');
      cat = await catRepo.findOne({id: id});

      if (!cat) {
        throw new Error('Unknown cat');
      }

      cat.title = title;
      cat.subtitle = subtitle;
      cat.alias = alias;
      cat.text = text;

      if (published !== undefined && +published !== +cat.published) {
        cat.published = +published === 0 ? false : true;
        if (cat.published) {
          cat.publishedAt = new Date();
        } else {
          cat.publishedAt = null;
        }
      }

      if (locked !== undefined && +locked !== +cat.locked) {
        cat.locked = +locked === 0 ? false : true;
        if (cat.locked) {
          cat.lockedAt = new Date();
        }
      }

      resSave = await catRepo.save(cat);
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The category has been updated successfully!'
      },
      data: resSave
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }

  public deleteCatByID = async (req: Request, res: Response, next: NextFunction) => {
    const catId = req.params.catId;
    let resDel: DeleteResult;

    try {
      const userRepo = getConnection().getRepository<CmsCategoryModel>('CmsCategory');
      resDel = await userRepo.delete({id: catId});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The category was deleted successfully!'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }
}
