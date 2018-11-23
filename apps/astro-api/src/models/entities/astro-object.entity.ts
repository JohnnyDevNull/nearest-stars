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
      target: 'AstroCatalog',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    coordinates: {
      target: 'AstroCoordinate',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    history: {
      target: 'AstroHistory',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    magnitudes: {
      target: 'AstroMagnitude',
      type: 'one-to-one',
      inverseSide: 'identifier'
    },
    orbits: {
      target: 'AstroOrbit',
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
      target: 'AstroVector',
      type: 'one-to-one',
      inverseSide: 'Identifier'
    }
  }
});
