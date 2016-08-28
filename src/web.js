
import http from 'http';
import socketIO from 'socket.io';

import express from 'express';
import path from 'path';
import webpack from './middleware/webpack';
const { Server } = http;
export default function web() {
  const app = express();
  const server = new Server(app);

  const io = socketIO(server);

  io.on('connection', (socket) => {
    const defaultRoom = 'general';

    socket.join(defaultRoom);

    socket.on('new user', ({ user }) => {
      io.in(defaultRoom).emit('user created', { user });
    });

    socket.on('new message', ({ message, user }) => {
      io.in(defaultRoom).emit('message created', {
        message,
        user,
      });
    });
  });

  app.set('view engine', 'pug');
  app.set('views', path.resolve(__dirname, '..', 'src', 'views'));

  app.use(express.static(path.resolve(__dirname, '..', 'src', 'public')));

  app.use(webpack);

  app.use('/js', express.static(`${__dirname}/js`));

  app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  });

  const port = process.env.NODE_PORT || 4000;

  app.server = server;

  app.server.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });

  return app;
}
