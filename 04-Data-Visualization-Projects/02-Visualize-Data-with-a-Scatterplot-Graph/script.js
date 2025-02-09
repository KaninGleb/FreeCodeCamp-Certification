const svg = d3.select("#scatterplot"),
    margin = {top: 20, right: 30, bottom: 40, left: 60},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

const xScale = d3.scaleTime().range([0, width]);
const yScale = d3.scaleTime().range([height, 0]);

const xAxis = d3.axisBottom(xScale).ticks(10).tickFormat(d3.timeFormat("%Y"));
const yAxis = d3.axisLeft(yScale).ticks(10).tickFormat(d3.timeFormat("%M:%S"));

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json").then(data => {
    data.forEach(d => {
        d.Seconds = +d.Seconds;
        d.Year = new Date(d.Year, 0);
        d.Time = d3.timeParse("%M:%S")(d.Time);
    });

    xScale.domain(d3.extent(data, d => d.Year));
    yScale.domain([d3.max(data, d => d.Time), d3.min(data, d => d.Time)]);

    g.append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    g.append("g")
        .attr("id", "y-axis")
        .call(yAxis);

    const dots = g.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", d => xScale(d.Year))
        .attr("cy", d => yScale(d.Time))
        .attr("r", 5)
        .attr("data-xvalue", d => d.Year.getFullYear())
        .attr("data-yvalue", d => d.Time.toISOString())
        .on("mouseover", function(event, d) {
            const tooltip = d3.select("#tooltip");
            tooltip.transition().duration(200).style("opacity", 0.9);
            tooltip.html(`${d.Name}: ${d.Nationality}<br>Year: ${d.Year.getFullYear()}<br>Time: ${d3.timeFormat("%M:%S")(d.Time)}`)
                .attr("data-year", d.Year.getFullYear())
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select("#tooltip").transition().duration(500).style("opacity", 0);
        });
});