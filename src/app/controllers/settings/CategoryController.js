const sequelize = require('../../../services/sequelize');
const { slug } = require('../../../utils/common');

const CategoryController = () => {
  const index = async (req, res) => {
    try {
      const categories = await sequelize.Categories.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'identifier', 'title'],
      });
      return res.formatter.ok({
        categories,
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

    let category = await sequelize.Categories.create({
      identifier,
      title: form.title,
    });

    return res.formatter.created({
      message: 'category Created',
      category,
    });
  };

  const update = async (req, res, next) => {
    let { id } = req.params;
    let form = req.body;

    const category = await sequelize.Categories.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title'],
    });

    category.title = form.title;
    await category.save();

    return res.formatter.ok({
      message: 'Category updated',
      category,
    });
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const category = await sequelize.Categories.findOne({
      where: { id },
      attributes: ['id', 'identifier', 'title'],
    });

    await category.destroy();

    return res.formatter.ok({
      message: 'Category Removed',
      category,
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

module.exports = CategoryController;
