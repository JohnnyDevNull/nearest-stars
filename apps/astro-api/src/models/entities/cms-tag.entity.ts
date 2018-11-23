import { CmsTagModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const CmsTagEntity = new EntitySchema<CmsTagModel>({
  name: 'CmsTag',
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
      inverseSide: 'tags',
      joinColumn: true
    },
    articles: {
      target: 'CmsArticle',
      type: 'many-to-many',
      joinTable: { name: 'cms_tag_article_map'},
      inverseSide: 'tags',
      cascade: true
    },
    categories: {
      target: 'CmsCategory',
      type: 'many-to-many',
      joinTable: { name: 'cms_tag_category_map' },
      inverseSide: 'tags',
      cascade: true
    },
    weblinks: {
      target: 'CmsWeblink',
      type: 'many-to-many',
      joinTable: { name: 'cms_tag_weblink_map' },
      inverseSide: 'tags',
      cascade: true
    }
  }
});
