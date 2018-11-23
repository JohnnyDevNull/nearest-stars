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
      length: 4000
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
      inverseSide: 'categories',
      joinColumn: true
    },
    type: {
      target: 'CmsCategoryType',
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
