const publicRoutes = {
  'POST /login': 'AuthController.login',
  'POST /validate': 'AuthController.validate',

  'GET /movies': 'MovieController.getAll',
  'POST /movies': 'MovieController.store',
};

module.exports = publicRoutes;
