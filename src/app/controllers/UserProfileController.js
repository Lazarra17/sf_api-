
const sequelize = require('../../services/sequelize');
const imgBase64 = require('../../methods/image/base64');

const bcrypt = require('../../services/bcrypt');

const UserProfileController = () => {

  return {
    
    index : async (req, res) => {
      try {
        const { uuid } = req.user;

        const assetUrl = process.env.ASSETS_URL + '/'

        const response = await sequelize.User.scope({ method: ['findUserByUUID', uuid] }).findOne({
          attributes: [
            'id',
            'username',
            'first_name',
            'last_name',
            'email'
          ],
          include: [
            {
              model: sequelize.UserDetail,
              as: 'details',
              attributes: [
                'details'
              ]
            },
            {
              model: sequelize.UserUpload,
              as: 'upload',
              attributes: [
                'path'
              ]
            }
          ]
        }).then(model => {

          const avatar  = ( model.upload )  ? model.upload.path : null;
          const details = ( model.details ) ? model.details.details : {}
          return {
            user: {
              'username'  : model.username,
              'first_name': model.first_name,
              'last_name' : model.last_name,
              'email'     : model.email,
            },
            details,
            avatar
          }
        });

        return res.formatter.ok(response);

      } catch (err) {
        
        const detailedErrMsg = (err.parent && err.parent.sqlMessage) ? err.parent.sqlMessage : '';
        return res.formatter.serverError({ msg: 'Internal server errors.', 
                                          title: 'Oops, something went wrong!', 
                                          detailed_msg: detailedErrMsg 
                                        });
      }
      
    },

    store : async (req, res) => {
      const payload  = req.body;
      const { uuid } = req.user;

      const getUser = await sequelize.User.scope({ method: ['findUserByUUID', uuid] }).findOne()
      .then((model) => {

        let userdata = {
          username  : payload.username,
          first_name: payload.first_name,
          last_name : payload.last_name,
          email     : payload.email,
        }

        if ( payload.password && payload.current_password ) {
          const checkpassword = bcrypt().comparePassword(payload.current_password, model.password);
          if ( !checkpassword ) {
            return res.formatter.unauthorized('The old password you have entered is incorrect');
          }
          userdata.password = bcrypt().password(payload.password)
        }
        model.update(userdata);
        
        model.getDetails().then(userdetail => {
          if ( userdetail ) {
            const userdetaildata = {
              details  : JSON.stringify({
                middle_name: payload.middle_name,
                mobile: payload.mobile,
              })
            }
            userdetail.update(userdetaildata);
          } else {
            sequelize.UserDetail.create({
              user_id : model.id,
              details: JSON.stringify({
                middle_name: payload.middle_name,
                mobile: payload.mobile,
              })
            });
          }
        });

        return model;
      });
      
      delete payload.password
      delete payload.current_password
      return res.formatter.ok({
        update: true,
        payload
      });

    },

    upload : async (req, res) => {

      try {
        const { image, file } = req.body;
        const { uuid }  = req.user;

        const imgSaved = await imgBase64(image, 'profile')

        await sequelize.User.scope({ method: ['findUserByUUID', uuid] }).findOne()
        .then((model) => {

          model.getUpload().then(userupload => {

            if ( userupload ) {
              const uploaddata = {
                path : imgSaved.path,
                name : file.name,
                size : file.size,
                type : file.type,
              }
              userupload.update(uploaddata);

            } else {
              sequelize.UserUpload.create({
                user_id : model.id,
                path    : imgSaved.path,
                name    : file.name,
                size    : file.size,
                type    : file.type,
              });
            }
          });

          return model;

        });
        
        const assetUrl = process.env.ASSETS_URL + '/'
        return res.formatter.ok({ 
          avatar : assetUrl + imgSaved.path, 
        });
        
      } catch (err) {
        const detailedErrMsg = (err.parent && err.parent.sqlMessage) ? err.parent.sqlMessage : '';
        return res.formatter.serverError({ msg: 'Internal server errors.', 
                                          title: 'Oops, something went wrong!', 
                                          detailed_msg: detailedErrMsg 
                                        });
      }

    }

  };
}

module.exports = UserProfileController;