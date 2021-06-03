var svgWidth = 960;
var svgHeight = 500;
var margin = {top:20, right:40, bottom: 60, left: 100};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

Create SVG wrapper
var svg = d3
    .select(".chart")
    .append("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var chart = svg.append("g");

d3.select(".chart").append("div").attr("class","tooltip").style("opacity",0);

Import Data
d3.csv("data.csv", function(err, healthData) {
    if (err) throw err;
  console.log(healthData)

  