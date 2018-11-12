import { ConnectionOptions, createConnection } from 'typeorm';
import app from './app';
import { config } from './config';


const PORT = process.env.PORT || 3000;

createConnection((<ConnectionOptions>config.DBConf)).then(async connection => {
  app.listen(PORT, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Listening at http://localhost:${PORT}`);
  });
}).catch(error => console.log('TypeORM connection error: ', error));
