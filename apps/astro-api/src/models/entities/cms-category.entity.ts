import { EntitySchema } from 'typeorm';
import { CmsCategoryModel } from '@nearest-stars/data-models';

export const CmsCategoryEntity = new EntitySchema<CmsCategoryModel>({
  name: 'CmsCategory',
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
      length: 4000,
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
      inverseSide: 'categories',
      joinColumn: true
    },
    type: {
      target: 'CmsCategoryType',
      type: 'many-to-one',
      inverseSide: 'categories',
      joinColumn: true
    },
    blog: {
      target: 'CmsBlog',
      type: 'many-to-one',
      inverseSide: 'categories',
      joinColumn: true
    },
    articles: {
      target: 'CmsArticle',
      type: 'one-to-many',
      inverseSide: 'category'
    },
    tags: {
      target: 'CmsTag',
      type: 'many-to-many',
      inverseSide: 'categories'
    },
    weblinks: {
      target: 'CmsWeblink',
      type: 'one-to-many',
      inverseSide: 'category'
    }
  }
});
