import { ObjectModel } from '../../model/index';
import { EntitySchema } from 'typeorm';

export const ObjectEntity = new EntitySchema<ObjectModel>({
  name: 'Object',
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
      target: 'ObjectType',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'objects'
    },
    system: {
      target: 'ObjectSystem',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'object'
    },
    catalogs: {
      target: 'ObjectCatalog',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    coordinates: {
      target: 'ObjectCoordinate',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    history: {
      target: 'ObjectHistory',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    magnitudes: {
      target: 'ObjectMagnitude',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    orbits: {
      target: 'ObjectOrbit',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    physicalInfo: {
      target: 'ObjectPhysicalInfo',
      type: 'one-to-one',
      inverseSide: 'object'
    },
    vectors: {
      target: 'ObjectVector',
      type: 'one-to-one',
      inverseSide: 'object'
    }
  }
});
