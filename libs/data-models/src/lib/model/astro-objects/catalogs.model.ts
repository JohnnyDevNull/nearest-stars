import { EntitySchema } from 'typeorm';
import { IdentifierModel } from './identifier.model';

export interface CatalogsModel {

  identifier: IdentifierModel;

  properName?: string;
  bayerId?: string;
  flamsteedId?: string;
  hipId?: string;
  hdId?: string;
  tycId?: string;
  hrId?: string;
  gId?: string;
  bdId?: string;
  usnoId?: string;
  usnoaId?: string;
  usnobId?: string;
  ucacId?: string;
  ucac2Id?: string;
  ucac3Id?: string;
  ucac4Id?: string;
  ucac5Id?: string;
  galexId?: string;
  sdssId?: string;
  panstarrsId?: string;
  twomassId?: string;
  ukidssId?: string;
  wiseId?: string;
  allwiseId?: string;
  wdId?: string;
  kId?: string;
  wdsId?: string;
  rxsId?: string;
  lhsId?: string;
  gjId?: string;
  varId?: string;
  distRank?: string;
}

export const CatalogsEntity = new EntitySchema<CatalogsModel>({
  name: 'Catalogs',
  columns: {
    properName: {
      type: String,
      length: 40
    },
    bayerId: {
      type: String,
      length: 20
    },
    flamsteedId: {
      type: String,
      length: 20
    },
    hipId: {
      type: String,
      length: 20
    },
    hdId: {
      type: String,
      length: 20
    },
    tycId: {
      type: String,
      length: 20
    },
    hrId: {
      type: String,
      length: 20
    },
    gId: {
      type: String,
      length: 20
    },
    bdId: {
      type: String,
      length: 20
    },
    usnoId: {
      type: String,
      length: 20
    },
    usnoaId: {
      type: String,
      length: 20
    },
    usnobId: {
      type: String,
      length: 20
    },
    ucacId: {
      type: String,
      length: 20
    },
    ucac2Id: {
      type: String,
      length: 20
    },
    ucac3Id: {
      type: String,
      length: 20
    },
    ucac4Id: {
      type: String,
      length: 20
    },
    ucac5Id: {
      type: String,
      length: 20
    },
    galexId: {
      type: String,
      length: 20
    },
    sdssId: {
      type: String,
      length: 20
    },
    panstarrsId: {
      type: String,
      length: 20
    },
    twomassId: {
      type: String,
      length: 20
    },
    ukidssId: {
      type: String,
      length: 20
    },
    wiseId: {
      type: String,
      length: 20
    },
    allwiseId: {
      type: String,
      length: 20
    },
    wdId: {
      type: String,
      length: 20
    },
    kId: {
      type: String,
      length: 20
    },
    wdsId: {
      type: String,
      length: 20
    },
    rxsId: {
      type: String,
      length: 20
    },
    lhsId: {
      type: String,
      length: 20
    },
    gjId: {
      type: String,
      length: 20
    },
    varId: {
      type: String,
      length: 20
    },
    distRank: {
      type: String,
      length: 20
    },
  },
  relations: {
    identifier: {
      target: 'Identifier',
      type: 'one-to-one',
      inverseSide: 'catalogs',
      joinColumn: true
    }
  }
});
