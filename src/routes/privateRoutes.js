const privateRoutes = {
  // UserController
  'GET /me/:uuid?': 'UserController.me',
  'POST /update-user': 'UserController.update',
  'POST /remove-user': 'UserController.remove',

  'GET  /user/profile': 'UserProfileController.index',
  'POST /user/profile': 'UserProfileController.store',
  'POST /user/profile/upload': 'UserProfileController.upload',

  // ----- SETTINGS -----

  // Casts
  'GET /settings/casts': 'settings/CastsController.index',
  'GET /settings/casts/:id': 'settings/CastsController.show',
  'POST /settings/casts': 'settings/CastsController.store',
  'PUT /settings/casts/:id': 'settings/CastsController.update',
  'DELETE /settings/casts/:id': 'settings/CastsController.remove',

  // Categories
  'GET /settings/category': 'settings/CategoryController.index',
  'GET /settings/category/:id': 'settings/CategoryController.show',
  'POST /settings/category': 'settings/CategoryController.store',
  'PUT /settings/category/:id': 'settings/CategoryController.update',
  'DELETE /settings/category/:id': 'settings/CategoryController.remove',

  // Sub Categories
  'GET /settings/sub-category': 'settings/SubCategoryController.index',
  'GET /settings/sub-category/:id': 'settings/SubCategoryController.show',
  'POST /settings/sub-category': 'settings/SubCategoryController.store',
  'PUT /settings/sub-category/:id': 'settings/SubCategoryController.update',
  'DELETE /settings/sub-category/:id': 'settings/SubCategoryController.remove',

  // Movie Types
  'GET /settings/movie-types': 'settings/MovieTypesController.index',
  'GET /settings/movie-types/:id': 'settings/MovieTypesController.show',
  'POST /settings/movie-types': 'settings/MovieTypesController.store',
  'PUT /settings/movie-types/:id': 'settings/MovieTypesController.update',
  'DELETE /settings/movie-types/:id': 'settings/MovieTypesController.remove',

  // TV Seasons
  'GET /settings/tv-season': 'settings/TvSeasonController.index',
  'GET /settings/tv-season/:id': 'settings/TvSeasonController.show',
  'POST /settings/tv-season': 'settings/TvSeasonController.store',
  'PUT /settings/tv-season/:id': 'settings/TvSeasonController.update',
  'DELETE /settings/tv-season/:id': 'settings/TvSeasonController.remove',
};

module.exports = privateRoutes;
