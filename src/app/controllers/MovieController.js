const sequelize = require('../../services/sequelize');
const config = require('../../config/files');
const formidable = require('formidable');
const slugify = require('slugify');
const qs = require('qs');
const fs = require('fs');

const MovieController = () => {
  const getAll = async (req, res) => {
    const movies = await sequelize.Movies.findAll({
      order: [['id', 'ASC']],
      attributes: ['id', 'identifier', 'title', 'details'],
      include: [
        {
          model: sequelize.Movieable,
          as: 'movieable',
          attributes: ['id', 'movie_id', 'type', 'type_id'],
          include: [
            {
              model: sequelize.Categories,
              as: 'categories',
              attributes: ['id', 'identifier', 'title'],
            },
          ],
        },
      ],
    });
    return res.formatter.ok({
      movies,
    });
  };

  const store = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let input = qs.parse(fields);
      let categories = input.categories;
      let sub_categories = input.sub_categories;
      let casts = input.casts;
      let movie = {
        identifier: slugify(input.title, '_'),
        title: input.title,
        type_id: input.type,
        details: JSON.stringify({
          author: input.author,
          writer: input.writer,
        }),
      };

      const createMovie = await sequelize.Movies.create(movie);

      //create categories
      categories.forEach((i, value) => {
        const _category = {
          movie_id: createMovie.id,
          category_id: value,
        };
        sequelize.Movie_categories.create(_category);
      });

      //create sub categories
      sub_categories.forEach((i, value) => {
        const _sub_category = {
          movie_id: createMovie.id,
          sub_category_id: value,
        };
        sequelize.Movie_sub_categories.create(_sub_category);
      });

      //create casts
      casts.forEach((i, value) => {
        const _cast = {
          movie_id: createMovie.id,
          cast_id: value,
        };
        sequelize.Movie_cast.create(_cast);
      });

      if (Object.keys(files).length) {
        let _files = qs.parse(files);
        Object.keys(_files['sub']).forEach(async (index, value) => {
          let subUpload = await fileUpload(_files['sub'][index]['file'], 'sub');

          if (subUpload.status) {
            let _movie_sub = {
              path: subUpload.path,
              name: subUpload.name,
              size: subUpload.size,
              type: subUpload.type,
              movie_id: createMovie.id,
              subtitle_id: input['sub'][index]['language'],
            };
            sequelize.movie_subtitle.create(_movie_sub);
          }
        });

        let movieUpload = await fileUpload(_files['video']);
        if (movieUpload.status) {
          let _movie_video = {
            path: movieUpload.path,
            name: movieUpload.name,
            size: movieUpload.size,
            type: movieUpload.type,
            movie_id: createMovie.id,
          };
          sequelize.Movie_uploads.create(_movie_video);
        }
      }
    });
    return res.formatter.ok({
      message: 'form',
    });
  };

  const fileUpload = async (file, type = 'video') => {
    try {
      let rand = Math.ceil(Math.random() * 1000);
      let filename = `${Date.now()}${rand}${file.name}`;
      let localDir = `${config.storage}/${type}`;

      let localPath = `${localDir}/${filename}`;
      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir);
      }
      let returnData = null;

      returnData = {
        status: true,
        path: localPath,
        name: file.name,
        size: file.size,
        type: file.type,
      };

      fs.rename(file.path, localPath, function () {});
      return returnData;
    } catch (err) {
      return {
        status: false,
        err: err,
      };
    }
  };

  return {
    getAll,
    store,
  };
};

module.exports = MovieController;

//title
//type
//categories[]
//sub_categories[]
//casts[]
//tv_shows
//tv_seasons
