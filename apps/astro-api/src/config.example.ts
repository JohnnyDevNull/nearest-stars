import { ConnectionOptions } from 'typeorm';

export const config = {
  jwtSecret: 'my!Super$Secret+2018=',
  jwtIssuer: 'express-api-typescript-template',
  DBConf: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'orm_express_test',
    synchronize: true,
    entities: [
    ]
  }
};
