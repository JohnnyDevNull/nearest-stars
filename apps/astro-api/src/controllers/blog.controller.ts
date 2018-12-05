import { BaseRestModel, CmsBlogModel } from '@nearest-stars/data-models';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { DeleteResult, getConnection } from 'typeorm';

export class BlogController {

  public getBlogs = async (req: Request, res: Response) => {
    const connection = getConnection();
    const blogRepo = connection.getRepository<CmsBlogModel>('CmsBlog');
    const blogs = await blogRepo.find();

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getBlogs success!'
      },
      data: blogs
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createBlog = async (req: Request, res: Response, next: NextFunction) => {

    let resSave: CmsBlogModel = null;

    try {
      const {title, subtitle, alias, text, published, locked} = req.body;

      const connection = getConnection();
      const blogRepo = connection.getRepository<CmsBlogModel>('CmsBlog');
      let blogs = await blogRepo.findOne({where: { title: title }});

      if (blogs) {
        throw new Error('Entitiy already exists with title "' + title + '"');
      }

      blogs = await blogRepo.findOne({where: { alias: alias }});

      if (blogs) {
        throw new Error('Entitiy already exists with alias "' + alias + '"');
      }

      const blog: CmsBlogModel = {};
      blog.title = title;
      blog.subtitle = subtitle;
      blog.alias = alias;
      blog.text = text;

      if (published !== undefined) {
        blog.published = published;
        if (+blog.published) {
          blog.publishedAt = new Date();
        }
      }

      if (locked !== undefined) {
        blog.locked = locked;
        if (+blog.locked) {
          blog.lockedAt = new Date();
        }
      }

      resSave = await blogRepo.save(blog);
    } catch (error) {
      error.status = 400;
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'Success'
      },
      data: resSave.id
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    let blog: CmsBlogModel = {};

    try {
      const blogId = +req.params.blogId
      if (!blogId || typeof blogId !== 'number') {
        throw new Error('Invalid blogId given');
      }

      const blogRepo = getConnection().getRepository<CmsBlogModel>('CmsBlog');
      blog = await blogRepo.findOne({where: { id: blogId }});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getBlogById success!'
      },
      data: blog
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createBlogEntryById = (req: Request, res: Response) => {
    const blogId = req.params.blogId
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'createBlogEntryById success!'
      },
      data: {
        blogId: blogId
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public updateBlogById = (req: Request, res: Response) => {
    const blogId = req.params.blogId;
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'updateBlogById success!'
      },
      data: {
        blogId: blogId
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public deleteBlogByID = async (req: Request, res: Response, next: NextFunction) => {
    const blogId = req.params.blogId;
    let resDel: DeleteResult;

    try {
      const userRepo = getConnection().getRepository<CmsBlogModel>('CmsBlog');
      resDel = await userRepo.delete({id: blogId});
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'Blog with id ' + blogId + ' successful deleted'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }
}
