import { IdentifierModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const IdentifierEntity = new EntitySchema<IdentifierModel>({
  name: 'Identifier',
  columns: {
    id: {
      type: Number,
      width: 20,
      unsigned: true,
      primary: true,
      generated: true
    },
    objectType: {
      type: String,
      length: 10,
    },
    name: {
      type: String,
      length: 40,
    },
    hierarchy: {
      type: String,
      length: 40
    }
  },
  relations: {
    catalogs: {
      target: 'Catalogs',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    coordinates: {
      target: 'Coordinates',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    history: {
      target: 'History',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    magnitudes: {
      target: 'Magnitudes',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    orbits: {
      target: 'Orbits',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    physicalInfo: {
      target: 'PhysicalInfo',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    system: {
      target: 'System',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    vectors: {
      target: 'Vectors',
      type: 'one-to-one',
      inverseSide: 'Identifier'
    }
  }
});
