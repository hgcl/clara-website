import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";
import { getAllMovies } from "../../lib/getAllMovies";
import watchedData from "../../data/watchedData.js";
import { getYear } from "date-fns";

// d3 related:
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ReactD3Books({ allMovies }) {
  const canvas = () => {
    const ref = useRef();

    useEffect(() => {
      // create margins and dimensions
      const heightValue = 420;
      const widthValue = 500;
      const margin = { top: 10, right: 20, bottom: 30, left: 50 };
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

      // Add X axis (gdpPercap)
      var x = d3.scaleLinear().domain([1930, 2030]).range([0, width]);
      graph
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // Add Y axis (lifeExp)
      var y = d3.scaleLinear().domain([0, 5000]).range([height, 0]);
      graph.append("g").call(d3.axisLeft(y));

      // Add a scale for bubble size
      var z = d3.scaleLinear().domain([0, 200]).range([1, 40]);

      // Add dots
      graph
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => {
          return x(d.gdpPercap);
        })
        .attr("cy", (d) => {
          return y(d.lifeExp);
        })
        .attr("r", (d) => {
          return z(d.pop);
        })
        .style("fill", "orange")
        .style("opacity", "0.7")
        .attr("stroke", "orange");
    }, []);

    return <svg ref={ref} />;
  };
  return (
    <Layout title="React + D3.js | Bubbles">
      <Container>
        <Header pageDescription={"React + D3.js | Bubbles"} />
        <div className="max-w-2xl mx-auto">{canvas()}</div>
      </Container>
    </Layout>
  );
}

// data
const data = [
  {
    country: "Point 1",
    gdpPercap: 1950, // x
    lifeExp: 4000, // y
    pop: 200, // z
  },
  {
    country: "Point 2",
    gdpPercap: 2000,
    lifeExp: 200,
    pop: 100,
  },
  {
    country: "Point 3",
    gdpPercap: 1960,
    lifeExp: 3900,
    pop: 150,
  },
];
