import { CmsBlogModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const CmsBlogEntity = new EntitySchema<CmsBlogModel>({
  name: 'CmsBlog',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
      unsigned: true
    },
    title: {
      type: String,
      length: 200
    },
    subtitle: {
      type: String,
      length: 400
    },
    alias: {
      type: String,
      length: 200
    },
    text: {
      type: String,
      length: 20000
    },
    published: {
      type: Boolean,
      width: 1
    },
    publishedAt: {
      type: Date
    },
    createdAt: {
      type: Date,
      createDate: true
    },
    updatedAt: {
      type: Date,
      updateDate: true
    },
    locked: {
      type: Boolean,
      width: 1
    },
    lockedAt: {
      type: Date
    },
    deleted: {
      type: Boolean,
      width: 1
    },
    deletedAt: {
      type: Date
    }
  },
  relations: {
    author: {
      target: 'User',
      type: 'many-to-one',
      inverseSide: 'articles',
      joinColumn: true
    },
    categories: {
      target: 'CmsCategory',
      type: 'one-to-many',
      inverseSide: 'blog',
    },
    tags: {
      target: 'CmsTag',
      type: 'many-to-many',
      inverseSide: 'articles',
    }
  }
});
