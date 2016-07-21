/* eslint-disable no-param-reassign */
export default function webpack(req, res, next) {
  res.locals.webpack = (path) =>
    (process.env.NODE_ENV === 'production')
      ? path
      : `http://localhost:8080${path}`;
  next();
}
