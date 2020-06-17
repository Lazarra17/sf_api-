const JWTService = require('../services/jwt');

module.exports = (req, res, next) => {
  const tokenToVerify = req.cookies.jwt || '';
  const responseMsg = { msg: 'Authentication token is invalid, please log in.' };

  if (!tokenToVerify) return res.formatter.unauthorized(responseMsg);

  return JWTService().verify(tokenToVerify, (err, user) => {
    if (err) return res.formatter.unauthorized(responseMsg);
    req.user = user;
    return next();
  });
};
