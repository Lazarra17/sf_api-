const sequelize = require('../../../services/sequelize');
const { slug } = require('../../../utils/common');

const CastsController = () => {
  const index = async (req, res) => {
    try {
      const casts = await sequelize.Casts.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'identifier', 'full_name'],
      });
      return res.formatter.ok({
        casts,
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
    let identifier = slug(form.full_name.toLowerCase(), '_');

    let cast = await sequelize.Casts.create({
      identifier,
      full_name: form.full_name,
    });

    return res.formatter.created({
      message: 'Cast Created',
      cast,
    });
  };

  const update = async (req, res, next) => {
    let { id } = req.params;
    let form = req.body;

    const cast = await sequelize.Casts.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'full_name'],
    });

    cast.full_name = form.full_name;
    await cast.save();

    return res.formatter.ok({
      message: 'Cast updated',
      cast,
    });
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const cast = await sequelize.Casts.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'full_name'],
    });

    await cast.destroy();

    return res.formatter.ok({
      message: 'Cast Removed',
      cast,
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

module.exports = CastsController;
