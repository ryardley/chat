import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Foo!');
});

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
