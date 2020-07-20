const sequelize = require('../../../services/sequelize');
const { slug } = require('../../../utils/common');

const MovieTypesController = () => {
  const index = async (req, res) => {
    try {
      const movieTypes = await sequelize.Movie_type.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'identifier', 'title'],
      });
      return res.formatter.ok({
        movieTypes,
      });
    } catch (err) {
      const detailedErrMsg =
        err.parent && err.parent.sqlMessage ? err.parent.sqlMessage : '';
      return res.formatter.serverError({
        msg: 'Internal server errors.',
        title: 'Oops, something went wrong!',
        detailed_msg: detailedErrMsg,
      });
    }
  };

  const show = async (req, res) => {
    return res.formatter.ok({ message: 'show' });
  };

  const store = async (req, res) => {
    let form = req.body;
    let identifier = slug(form.title.toLowerCase(), '_');

    let movieTypes = await sequelize.Movie_type.create({
      identifier,
      title: form.title,
    });

    return res.formatter.created({
      message: 'Movie Types Created',
      movieTypes,
    });
  };

  const update = async (req, res, next) => {
    let { id } = req.params;
    let form = req.body;

    const movieTypes = await sequelize.Movie_type.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title'],
    });

    movieTypes.title = form.title;
    await movieTypes.save();

    return res.formatter.ok({
      message: 'Movie Types updated',
      movieTypes,
    });
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const movieTypes = await sequelize.Movie_type.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title'],
    });

    await movieTypes.destroy();

    return res.formatter.ok({
      message: 'Movie Types Removed',
      movieTypes,
    });
  };

  return {
    index,
    show,
    store,
    update,
    remove,
  };
};

module.exports = MovieTypesController;
