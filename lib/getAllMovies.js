export async function getAllMovies(watchedJson) {
  // 1. Fetch movies from TMDB based on imdb_id
  const listId = "7073406";
  const response = await fetch(
    `https://api.themoviedb.org/3/list/${listId}?api_key=${process.env.TMDB_API_KEY}`
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
  // console.log(normalizedMovies);

  // 3. Match TMDB and JSON info + destructure
  const movies = watchedJson.map((movie) => {
    // destructure JSON record data
    const { tmdb_id, date, rating, review } = movie;
    // destructure book metadata
    const {
      first_air_date, // for TV shows
      name, // for TV shows
      poster_path,
      release_date, // for movies
      title, // for movies
      coverUrl = "https://image.tmdb.org/t/p/w300" + poster_path,
    } = normalizedMovies[
      `${tmdb_id}` // with id previously destructured
    ];
    // console.log(normalizedMovies);
    return {
      coverUrl,
      date: date || null,
      rating,
      release_date: release_date || first_air_date,
      review,
      title: title || name,
      tmdb_id,
    };
  });
  // console.log(movies);
  return movies;
}
