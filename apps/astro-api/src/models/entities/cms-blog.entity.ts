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
      length: 20000,
      nullable: true
    },
    published: {
      type: Boolean,
      width: 1,
      default: false
    },
    publishedAt: {
      type: Date,
      nullable: true
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
      width: 1,
      default: false
    },
    lockedAt: {
      type: Date,
      nullable: true
    },
    deleted: {
      type: Boolean,
      width: 1,
      default: false
    },
    deletedAt: {
      type: Date,
      nullable: true
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
