/* eslint-disable no-param-reassign */
export default function webpackMiddleware(req, res, next) {
  res.locals.assetServerHost = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8080' : '';
  next();
}
