import { AstroObjectModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

export const AstroObjectEntity = new EntitySchema<AstroObjectModel>({
  name: 'AstroObject',
  columns: {
    id: {
      type: Number,
      width: 20,
      unsigned: true,
      primary: true,
      generated: true
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
    objectType: {
      target: 'AstroObjectType',
      type: 'many-to-one',
      inverseSide: 'objects'
    },
    catalogs: {
      target: 'AstroCatalog',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    coordinates: {
      target: 'AstroCoordinate',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    history: {
      target: 'AstroHistory',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    magnitudes: {
      target: 'AstroMagnitude',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    orbits: {
      target: 'AstroOrbit',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    physicalInfo: {
      target: 'AstroPhysicalInfo',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    system: {
      target: 'AstroSystem',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    vectors: {
      target: 'AstroVector',
      type: 'one-to-one',
      inverseSide: 'object'
    }
  }
});
