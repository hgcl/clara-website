import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";
// d3 related:
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ReactD3Bars({}) {
  const canvas = () => {
    const ref = useRef();

    useEffect(() => {
      const barColors = "orange";

      // create margins and dimensions
      const heightValue = 400;
      const widthValue = 600;
      const innerPadding = 0.4;
      const outerPadding = 0.4;
      const margin = { top: 20, right: 20, bottom: 100, left: 100 };
      const graphWidth = widthValue - margin.left - margin.right;
      const graphHeight = heightValue - margin.top - margin.bottom;

      // 1. select svg
      const svgElement = d3
        .select(ref.current)
        // viewBox: min-x, min-y, width and height
        .attr("viewBox", `0 0 ${widthValue} ${heightValue}`);

      // 1b. create graph container (group)
      const graph = svgElement
        .append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // 1c. create scales
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.orders)])
        .range([graphHeight, 0]);
      const x = d3
        .scaleBand()
        .domain(data.map((item) => item.name))
        .range([0, widthValue - 100])
        .paddingInner(innerPadding)
        .paddingOuter(outerPadding);

      // 1d. create x and y axes
      const xAxisGroup = graph
        .append("g")
        .attr("transform", `translate(0,${graphHeight})`);
      const yAxisGroup = graph.append("g");

      // create and call the axes (add the axes to the axes groups)
      const xAxis = d3.axisBottom(x);
      const yAxis = d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat((d) => d + " orders");

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      // rotate x axis labels
      xAxisGroup
        .selectAll("text")
        .attr("transform", "rotate(-40)")
        .attr("text-anchor", "end");

      // 2. join data
      const rects = graph.selectAll("rect").data(data);

      // 5. append the enter selection to DOM
      rects
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.name))
        .attr("fill", barColors)
        .attr("width", x.bandwidth)
        // A. starting conditions
        .attr("y", graphHeight)
        .attr("height", 0)
        // B. animation
        .transition()
        .duration(500)
        // C. ending conditions
        .attr("y", (d) => y(d.orders))
        .attr("height", (d) => graphHeight - y(d.orders));
    }, []);

    return <svg ref={ref} />;
  };
  return (
    <Layout title="React + D3.js | Simple chart">
      <Container>
        <Header pageDescription={"React + D3.js | Simple chart"} />
        <div className="max-w-2xl mx-auto">{canvas()}</div>
      </Container>
    </Layout>
  );
}

const data = [
  {
    name: "soup",
    orders: 100,
  },
  {
    name: "curry",
    orders: 200,
  },
  {
    name: "pasta",
    orders: 300,
  },
  {
    name: "burger",
    orders: 400,
  },
  {
    name: "pizzaaaaaaa",
    orders: 500,
  },
];
