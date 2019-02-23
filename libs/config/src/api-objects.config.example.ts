export const ApiObjectsConfig = {
  jwtSecret: 'my!Super$Secret+2018=',
  jwtIssuer: 'express-api-typescript-template',
  jwtExpTime: '60s',
  saltRounds: 10,
  crossOrigin: true,
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
