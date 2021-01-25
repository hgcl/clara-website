// {
//   id: '7073406',
//   items: [
//     {
//       adult: false,
//       backdrop_path: '/2lBOQK06tltt8SQaswgb8d657Mv.jpg',
//       genre_ids: [Array],
//       id: 530915,
//       media_type: 'movie',
//       original_language: 'en',
//       original_title: '1917',
//       overview: 'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
//       popularity: 108.322,
//       poster_path: '/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
//       release_date: '2019-12-25',
//       title: '1917',
//       vote_average: 7.9,
//       vote_count: 7490
//     },
//     {
//       adult: false,
//       backdrop_path: '/cRuf19zh0OHFGWVA9Q8Bipgavv2.jpg',
//       genre_ids: [Array],
//       id: 333371,
//       media_type: 'movie',
//       original_language: 'en',
//       original_title: '10 Cloverfield Lane',
//       overview: 'After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.',
//       popularity: 39.211,
//       poster_path: '/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg',
//       release_date: '2016-03-10',
//       title: '10 Cloverfield Lane',
//       video: false,
//       vote_average: 6.9,
//       vote_count: 5760
//     },
//   ],
//   item_count: 3,
//   iso_639_1: 'en',
//   name: 'Watched List',
//   poster_path: null
// }
//  imdb_id: 'tt4154664', tt8946378,

export async function getAllMovies(watchedJson) {
  // 1. Fetch movies from TMDB based on imdb_id
  const listId = "7073406";
  const response = await fetch(
    `https://api.themoviedb.org/3/list/${listId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const moviesMetadata = await response.json();

  // 2. Normalize moviesMetadata array
  const movieArray = moviesMetadata.items;
  const normalizedMovies = movieArray.reduce((moviesAcc, movie) => {
    return {
      // Assign the movie object to its ID...
      [movie.id]: movie,
      // ... and return the whole normalized movies object
      ...moviesAcc,
    };
  }, {});

  // 3. Match TMDB and JSON info + destructure
  const movies = watchedJson.map((movie) => {
    // destructure JSON record data
    const { tmdb_id, date, rating, review } = movie;

    // destructure book metadata
    const { title, release_date, poster_path } = normalizedMovies[
      `${tmdb_id}` // with isbn previously destructured
    ];
    return {
      tmdb_id,
      date,
      rating,
      review,
      title,
      release_date,
      poster_path,
    };
  });
  return movies;
}
