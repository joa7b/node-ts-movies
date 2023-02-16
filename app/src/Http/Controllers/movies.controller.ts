const moviesService = require('../../Services/movies.service.ts');

const findAllMoviesController = async (response) => {
  try {
    const data = moviesService.findAllMoviesService();
    response.status(200).send({
      data: data,
      success: true,
    });
  } catch (err) {
    response.status(400).send({
      message: err,
      success: false,
    });
  }
};

const findByIdMoviesController = async (request, response) => {
  try {
    const { movieId } = request.params;
    response.status(200).send({
      data: '',
      success: true,
    });
  } catch (err) {
    response.status(400).send({
      message: err,
      success: false,
    });
  }
};

module.exports = { findAllMoviesController, findByIdMoviesController };
