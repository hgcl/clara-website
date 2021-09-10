import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";
// import watchedData from "../../data/watchedData.js";

// d3 related:
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ReactD3MovieGenres() {
  const canvas = () => {
    const ref = useRef();

    useEffect(() => {
      // create margins and dimensions
      const heightValue = 400;
      const widthValue = 500;
      const margin = { top: 10, right: 10, bottom: 10, left: 10 };
      const width = widthValue - margin.left - margin.right;
      const height = heightValue - margin.top - margin.bottom;

      // 1. select svg
      const svgElement = d3
        .select(ref.current)
        // viewBox: min-x, min-y, width and height
        .attr("viewBox", `0 0 ${widthValue} ${heightValue}`);

      // 1b. create graph container (group)
      const graph = svgElement
        .append("g")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Give the data to this cluster layout:
      var root = d3.hierarchy(originalData).sum((d) => d.value); // Here the size of each leave is given in the 'value' field in input data

      // Then d3.treemap computes the position of each element of the hierarchy
      d3
        .treemap()
        .size([width, height])
        .paddingTop(28)
        .paddingRight(7)
        .paddingInner(3)(
        // Padding between each rectangle
        //.paddingOuter(6)
        //.padding(20)
        root
      );

      // prepare a color scale
      var color = d3
        .scaleOrdinal()
        // .domain(["boss1", "boss2", "boss3"])
        .range(["orange", "green", "yellow"]);

      // And a opacity scale
      var opacity = d3.scaleLinear().domain([10, 30]).range([0.5, 1]);

      // use this information to add rectangles:
      graph
        .selectAll("rect")
        .data(root.leaves())
        .enter()
        .append("rect")
        .attr("x", (d) => d.x0)
        .attr("y", (d) => d.y0)
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .style("stroke", "black")
        .style("fill", (d) => color(d.parent.data.name))
        .style("opacity", (d) => opacity(d.data.value));

      // and to add the text labels (name)
      graph
        .selectAll("text")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr("x", (d) => d.x0 + 5) // adjust position (more right)
        .attr("y", (d) => d.y0 + 20) // adjust position (lower)
        // .text((d) => d.data.name.replace("mister_", ""))
        .text((d) => d.data.name)
        .attr("font-size", "19px")
        .attr("fill", "white");

      // and to add the text labels (value)
      graph
        .selectAll("vals")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr("x", (d) => d.x0 + 5) // adjust position (more right)
        .attr("y", (d) => d.y0 + 35) // adjust position (lower)
        .text((d) => d.data.value)
        .attr("font-size", "11px")
        .attr("fill", "white");

      // Add title for each cluster
      // graph
      //   .selectAll("titles")
      //   .data(root.descendants().filter((d) => d.depth == 1))
      //   .enter()
      //   .append("text")
      //   .attr("x", (d) => d.x0)
      //   .attr("y", (d) => d.y0 + 21)
      //   .text((d) => d.data.name)
      //   .attr("font-size", "19px")
      //   .attr("fill", (d) => color(d.data.name));

      // Add main title
      // graph
      //   .append("text")
      //   .attr("x", 0)
      //   .attr("y", 14) // +20 to adjust position (lower)
      //   .text("Movie Genres")
      //   .attr("font-size", "19px")
      //   .attr("fill", "grey");
    }, []);

    return <svg ref={ref} />;
  };
  return (
    <Layout title="React + D3.js | Movie Genres">
      <Container>
        <Header pageDescription={"React + D3.js | Movie Genres"} />
        <div className="max-w-2xl mx-auto">{canvas()}</div>
      </Container>
    </Layout>
  );
}

const originalData = {
  children: [
    {
      name: "Movie Genres",
      children: [
        { name: "12", value: 98 },
        { name: "14", value: 55 },
        { name: "16", value: 45 },
        { name: "18", value: 93 },
        { name: "27", value: 8 },
        { name: "28", value: 70 },
        { name: "35", value: 90 },
        { name: "36", value: 8 },
        { name: "37", value: 3 },
        { name: "53", value: 42 },
        { name: "80", value: 30 },
        { name: "99", value: 6 },
        { name: "878", value: 48 },
        { name: "9648", value: 16 },
        { name: "10402", value: 7 },
        { name: "10749", value: 27 },
        { name: "10751", value: 58 },
        { name: "10752", value: 5 },
        { name: "10765", value: 2 },
      ],
    },
  ],
};

// export async function getStaticProps() {
//   const movieData = await getMoviesData(watchedData);

//   return {
//     props: { movieData },
//   };
// }

// async function getMoviesData(watchedJson) {
//   // 1. Fetch movies from TMDB based on imdb_id
//   const listId = "7073406";
//   const response = await fetch(
//     `https://api.themoviedb.org/3/list/${listId}?api_key=${process.env.TMDB_API_KEY}`
//   );
//   const moviesMetadata = await response.json();

//   // 2. Normalize moviesMetadata array
//   const movieArray = moviesMetadata.items;
//   const normalizedMovies = movieArray.reduce((moviesAcc, movie) => {
//     let genreIds = movie.genre_ids;
//     return [genreIds, ...moviesAcc];
//   }, []);

//   // Merge all genre arrays into one
//   const genreIds = [].concat.apply([], normalizedMovies);

//   // Count number of occurences of each genre ID
//   function getGenreCounts(array) {
//     let map = {};
//     for (let i = 0; i < array.length; i++) {
//       let item = array[i];
//       map[item] = map[item] + 1 || 1;
//     }
//     return map;
//   }

//   // https://stackoverflow.com/questions/36411566/how-to-transpose-a-javascript-object-into-a-key-value-array
//   // Transform into an array of objects
//   const genreIdList = Object.entries(getGenreCounts(genreIds)).map(
//     ([name, value]) => ({
//       name,
//       value,
//     })
//   );

//   // Get genre list from TMDB
//   const responseGenre = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`
//   );
//   const genreMetadata = await responseGenre.json();

//   console.log(genreMetadata);

//   // Give proper hierarchy structure
//   const data = {
//     children: [
//       {
//         name: "Hey",
//         children: genreIdList,
//       },
//     ],
//   };

//   // console.log(JSON.stringify(data, null, 2));
//   return data;
// }
