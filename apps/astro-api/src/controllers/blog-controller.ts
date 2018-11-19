import { BaseRestModel } from '@nearest-stars/data-models';
import { Request, Response } from 'express';
import * as HttpStatus from '../../../../node_modules/http-status-codes';

export class BlogController {

  public getBlogs = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getBlogs success!'
      },
      data: {}
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public createBlog = (req: Request, res: Response) => {
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'createBlog success!'
      },
      data: {}
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }

  public getBlogById = (req: Request, res: Response) => {
    const blogId = req.params.blogId
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'getBlogById success!'
      },
      data: {
        blogId: blogId
      }
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

  public deleteBlogByID = (req: Request, res: Response) => {
    const blogId = req.params.blogId;
    const result: BaseRestModel<any> = {
      meta: {
        code: 0,
        message: 'deleteBlogByID success!'
      },
      data: {
        blogId: blogId
      }
    };
    res.statusCode = HttpStatus.OK;
    res.json(result);
  }
}
