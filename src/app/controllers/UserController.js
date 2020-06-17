
const sequelize = require('../../services/sequelize');

const UserController = () => {

  // get current user profile
  const me = async (req, res) => {
    try {
      let { uuid } = req.params;
      if ( !uuid ) {
        uuid = req.user.uuid
      }

      const getProfile = await sequelize.User.scope({ method: ['findUserByUUID', uuid] }).findOne({
        // you can adjust the fields here
        attributes: [
          'uuid',
          'first_name',
          'last_name',
          'email'
        ]
      });
      if ( !getProfile)  return res.formatter.badRequest({ msg: 'Bad Request: User not found.', title: 'Oops, something went wrong!' });
      return res.formatter.ok({ user: getProfile });
      
    } catch (err) {
      
      const detailedErrMsg = (err.parent && err.parent.sqlMessage) ? err.parent.sqlMessage : '';
      return res.formatter.serverError({ msg: 'Internal server errors.', 
                                        title: 'Oops, something went wrong!', 
                                        detailed_msg: detailedErrMsg 
                                      });
    }
    
  }

  // update user profile
  const update = async (req, res) => {

    return res.formatter.ok({ user: 'User updated' });
  }

  // delete user.
  const remove = async (req, res) => {

    return res.formatter.ok({ user: 'User removed' });
  }

  return {
    me,
    update,
    remove,
  };
}

module.exports = UserController;