const sequelize = require('../../../services/sequelize');
const { slug } = require('../../../utils/common');

const TvSeasonController = () => {
  const index = async (req, res) => {
    try {
      const tvShows = await sequelize.Tv_seasons.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'identifier', 'title', 'description'],
      });
      return res.formatter.ok({
        tvShows,
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

    let tvShows = await sequelize.Tv_seasons.create({
      identifier,
      title: form.title,
      description: form.description,
    });

    return res.formatter.created({
      message: 'Tv Shows Created',
      tvShows,
    });
  };

  const update = async (req, res, next) => {
    let { id } = req.params;
    let form = req.body;

    const tvShows = await sequelize.Tv_seasons.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title', 'description'],
    });

    tvShows.title = form.title;
    tvShows.description = form.description;
    await tvShows.save();

    return res.formatter.ok({
      message: 'Tv Shows updated',
      tvShows,
    });
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const tvShows = await sequelize.Tv_seasons.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title', 'description'],
    });

    await tvShows.destroy();

    return res.formatter.ok({
      message: 'Tv Shows Removed',
      tvShows,
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

module.exports = TvSeasonController;
