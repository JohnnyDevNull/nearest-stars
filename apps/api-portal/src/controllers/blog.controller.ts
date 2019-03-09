import { BaseRestModel, CmsBlogModel } from '@nearest-stars/schema';
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
        code: HttpStatus.OK,
        message: ''
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
        throw new Error('Entity already exists with title "' + title + '"');
      }

      blogs = await blogRepo.findOne({where: { alias: alias }});

      if (blogs) {
        throw new Error('Entity already exists with alias "' + alias + '"');
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
        code: HttpStatus.CREATED,
        message: 'The blog was created successfully!'
      },
      data: resSave.id
    };
    res.statusCode = HttpStatus.CREATED;
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
        code: HttpStatus.OK,
        message: ''
      },
      data: blog
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public updateBlogById = async (req: Request, res: Response, next: NextFunction) => {
    let blog: CmsBlogModel = {};
    let resSave: CmsBlogModel = {};

    try {
      const blogId = +req.params.blogId;
      if (!blogId || typeof blogId !== 'number') {
        throw new Error('Invalid blogId given');
      }

      const {id, title, subtitle, alias, text, published, locked} = req.body;

      if (!id) {
        throw new Error('missing field blogId in request body');
      }

      if (+id !== +blogId) {
        throw new Error('request blog id and body missmatch');
      }

      const blogRepo = getConnection().getRepository<CmsBlogModel>('CmsBlog');
      blog = await blogRepo.findOne({id: id});

      if (!blog) {
        throw new Error('Unknown blog');
      }

      blog.title = title;
      blog.subtitle = subtitle;
      blog.alias = alias;
      blog.text = text;

      if (published !== undefined && +published !== +blog.published) {
        blog.published = +published !== 0;
        if (blog.published) {
          blog.publishedAt = new Date();
        } else {
          blog.publishedAt = null;
        }
      }

      if (locked !== undefined && +locked !== +blog.locked) {
        blog.locked = +locked !== 0;
        if (blog.locked) {
          blog.lockedAt = new Date();
        }
      }

      resSave = await blogRepo.save(blog);
    } catch (error) {
      next(error);
      return;
    }

    const result: BaseRestModel<any> = {
      meta: {
        code: HttpStatus.ACCEPTED,
        message: 'The blog has been updated successfully!'
      },
      data: resSave
    };
    res.statusCode = HttpStatus.ACCEPTED;
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
        code: HttpStatus.ACCEPTED,
        message: 'The blog was deleted successfully!'
      },
      data: {
        count: +resDel.raw.affectedRows
      }
    };
    res.statusCode = HttpStatus.ACCEPTED;
    res.json(result);
  }
}
