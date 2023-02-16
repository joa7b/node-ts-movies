const movies = require('./data.json')

// type moviesPayload = {
//     adult: boolean,
//     backdrop_path: string,
//     genre_ids: number[],
//     id: number,
//     original_language: string,
//     original_title: string,
//     overview: string,
//     popularity: number,
//     poster_path: string,
//     release_date: string,
//     title: string,
//     video: false,
//     vote_average: number,
//     vote_count: number
// }

const findAllMoviesService = () => {
    const data = movies
    return data
};

module.exports = {
  findAllMoviesService,
};
