import express from 'express';
import path from 'path';
import webpack from './middleware/webpack';
const app = express();
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, '..', 'src', 'views'));

app.use(express.static(path.resolve(__dirname, '..', 'src', 'public')));

app.use(webpack);

app.use('/js', express.static(`${__dirname}/js`));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
