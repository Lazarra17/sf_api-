
const jwtService    = require('../../services/jwt');
const bcryptService = require('../../services/bcrypt');
const config        = require('../../config');
const sequelize     = require('../../services/sequelize');

const AuthController = () => {

  const jwtTokenProcess = (res, token) => res.cookie('jwt', token, config.jwt);

  const jwtAuthorizedUser = (res, user) => {
    const userObj = {
      uuid      : user.uuid
    };
    const token = jwtService().issue(userObj);

    jwtTokenProcess(res, token);
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res.formatter.unauthorized({ msg: 'User Credential does not match.' });

    try {

      const user = await sequelize.User.scope({ method: ['findUserByEmailOrUsername', email || null, email] }).findOne({
        include: [
          {
            model: sequelize.UserUpload,
            as: 'upload',
            attributes: [
              'path'
            ]
          }
        ]
      });

      if (!user) {
        return res.formatter.badRequest({ msg: 'Bad Request: User not found.' });
      }

      if (bcryptService().comparePassword(password, user.password)) {
        // add new object for user as per needed..
        jwtAuthorizedUser(res, user);

        const assetUrl = process.env.ASSETS_URL + '/'
        const avatar   = ( user.upload ) ? assetUrl + user.upload.path : null;

        return res.formatter.ok({ user: {
          uuid      : user.uuid,
          first_name: user.first_name,
          last_name : user.last_name,
          email     : user.email,
          username  : user.username,
          avatar    : avatar,
        } });
      }

    } catch (err) {
      console.log('er', err);
      return res.formatter.serverError({ msg:'Internal server errors.' });
    }
    return res.formatter.unauthorized({ msg: 'User Credential does not match.' });
    
  }

  const validate = (req, res) => {
    const { token } = req.body;

    jwtService().verify(token, (err) => {
      if (err) {
        return res.formatter.unauthorized({ isvalid: false, msg: 'Token is invalid, Please try again.'});
      }
      return res.formatter.ok({ isvalid: true });
    });
  }
  
  return {
    login,
    validate,
  };
}


module.exports = AuthController;