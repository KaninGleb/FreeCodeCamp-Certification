// Setting footer year
document.getElementById("date").textContent = new Date().getFullYear();

async function main() {
    //   Getting data from API
    const moviesResp = await fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json");

    //   Getting the movies
    const movies = await moviesResp.json();

    // Creating color scheme
    const colors = d3.scaleOrdinal(d3.schemeSet2);

    //   selecting our treemap svg
    const svg = d3.select("svg#treemap")

    //   Creating a tooltip
    const tooltip = d3.select("body").append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .attr("id", "tooltip");

    //   creating our treemap root from the data
    const root = d3.hierarchy(movies).sum(d => d.value);

    //   Accessing svg height and weight
    const width = svg.attr("width");
    const height = svg.attr("height");

    //   Creating the treemap
    const treemap = d3.treemap()
        .size([width, height])
        .padding(1);

    //   Calling the treemap with root data
    treemap(root);

    //   Creating the cells
    const cell = svg.selectAll('g')
        .data(root.leaves())
        .enter()
        .append('g')
        .attr('class', 'group')
        .attr('transform', d => {
            return 'translate(' + d.x0 + ',' + d.y0 + ')';
        });

    //   Appending rectangles
    cell.append("rect")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("data-name", d => d.data.name)
        .attr("data-category", d => d.data.category)
        .attr("data-value", d => d.data.value)
        .attr("class", "tile")
        .style("fill", d => colors(d.data.category))
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 0.9);
            tooltip.attr("data-value", d.data.value);
            tooltip.html("Name : " + d.data.name + "</br>" +
                "Category : " + d.data.category + "</br>" +
                "Value : " + d.data.value);
            tooltip.style("left", (event.pageX + 10) + "px");
            tooltip.style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

    //   Appending texts
    cell.append('text')
        .attr('class', 'tile-text')
        .selectAll('tspan')
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
        .enter()
        .append('tspan')
        .attr('x', 3)
        .attr('y', (d, i) => 13 + i * 12)
        .text(d => d);

    //   Creating legend
    const {
        children: movieData
    } = movies;
    const categories = movieData.map(movie => movie.name);

    const legend = d3.select("svg#legend");
    const blockSize = 20;

    //   Generating the legend
    legend.selectAll("rect")
        .data(categories)
        .enter()
        .append("rect")
        .attr("id", "legend")
        .attr("class", "legend-item")
        .attr("width", blockSize * 1.25)
        .attr("height", blockSize)
        .attr("x", blockSize)
        .attr("y", (d, i) => 10 + i * (blockSize + 15))
        .attr("fill", d => colors(d))

    //   Adding legend texts
    legend.selectAll("text")
        .data(categories)
        .enter()
        .append("text")
        .attr("class", "legend-text")
        .attr("width", blockSize * 1.25)
        .attr("height", blockSize)
        .attr("x", blockSize * 2.75)
        .attr("y", (d, i) => 25 + i * (blockSize + 15))
        .text(d => d)
        .attr("fill", d => colors(d));
}

main();