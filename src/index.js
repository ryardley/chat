import express from 'express';

const app = express();

app.use(express.static('src/public'));

app.use('/js', express.static(`${__dirname}/js`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
