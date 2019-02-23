/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import * as socketio from 'socket.io';
import * as httpServer from 'http';

const app = express();
const http = new httpServer.Server(app);
const io = socketio(http);

app.get('/', (req, res) => {
  res.send(`api-socket is online!`);
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
