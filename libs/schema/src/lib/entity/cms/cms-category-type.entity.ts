import { EntitySchema } from 'typeorm';
import { CmsCategoryTypeModel } from '../../model/index';

export const CmsCategoryTypeEntity = new EntitySchema<CmsCategoryTypeModel>({
  name: 'CmsCategoryType',
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
      length: 2000
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
    categories: {
      type: 'one-to-many',
      target: 'CmsCategory',
      cascade: true,
      inverseSide: 'type'
    }
  }
});
