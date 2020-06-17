const privateRoutes = {
  // UserController
  'GET /me/:uuid?': 'UserController.me',
  'POST /update-user': 'UserController.update',
  'POST /remove-user': 'UserController.remove',

  'GET  /user/profile': 'UserProfileController.index',
  'POST /user/profile': 'UserProfileController.store',
  'POST /user/profile/upload': 'UserProfileController.upload',
};

module.exports = privateRoutes;
