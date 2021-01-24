//  imdb_id: 'tt4154664', tt8946378,

export async function getAllMovies(watchedJson) {
  // Get imdb_id array from my watchedData json file
  const idArray = watchedJson.reduce((acc, cur) => {
    acc.push(cur.imdb_id);
    return acc;
  }, []);

  // Fetch all movies in idArray from TMDB -TEST
  const moviesMetadata = idArray.reduce((acc, cur) => {
    const response = fetch(
      `https://api.themoviedb.org/3/find/${cur}?api_key=${process.env.API_KEY}&language=en-US&external_source=imdb_id`
    );
    acc.push(response.json());
    return acc;
  }, []);
  console.log(moviesMetadata);

  // Fetch movies from TMDB based on imdb_id
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/find/tt8946378?api_key=${process.env.API_KEY}&language=en-US&external_source=imdb_id`
  // );
  // const moviesMetadata = await response.json();

  // const movies = {
  //   tmdb_id: moviesMetadata.movie_results[0].id,
  //   title: moviesMetadata.movie_results[0].title,
  //   release_date: moviesMetadata.movie_results[0].release_date,
  // };
  // console.log(movies);
  return movies;
}
