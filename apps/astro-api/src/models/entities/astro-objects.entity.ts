import { AstroIdentifierModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroObjectsEntity = new EntitySchema<AstroIdentifierModel>({
  name: 'AstroObjects',
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
      target: 'AstroCatalogs',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    coordinates: {
      target: 'AstroCoordinates',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    history: {
      target: 'AstroHistory',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    magnitudes: {
      target: 'AstroMagnitudes',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    orbits: {
      target: 'AstroOrbits',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    physicalInfo: {
      target: 'AstroPhysicalInfo',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    system: {
      target: 'AstroSystem',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    vectors: {
      target: 'AstroVectors',
      type: 'one-to-one',
      inverseSide: 'Identifier'
    }
  }
});
