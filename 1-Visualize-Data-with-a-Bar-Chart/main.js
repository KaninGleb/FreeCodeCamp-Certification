const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataset = data.data;

        const margin = {top: 20, right: 30, bottom: 40, left: 40};
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select("#chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Set x and y scales
        const x = d3.scaleTime()
            .domain(d3.extent(dataset, d => new Date(d[0])))
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[1])])
            .range([height, 0]);

        // Add x axis
        const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m"));
        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis);

        // Add y axis
        const yAxis = d3.axisLeft(y);
        svg.append("g")
            .attr("id", "y-axis")
            .call(yAxis);

        // Add bars
        svg.selectAll(".bar")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("data-date", d => d[0])
            .attr("data-gdp", d => d[1])
            .attr("x", d => x(new Date(d[0]))) // Align with x scale
            .attr("y", d => y(d[1]))
            .attr("width", (width / dataset.length) - 1) // Width of each bar
            .attr("height", d => height - y(d[1]))
            .on("mouseover", function(event, d) {
                const tooltip = d3.select("#tooltip");
                tooltip.transition().duration(200).style("opacity", 0.9);
                tooltip.html(`${d[0]}<br>GDP: $${d[1]} Billion`)
                    .attr("data-date", d[0])
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                d3.select("#tooltip").transition().duration(500).style("opacity", 0);
            });

        // Title
        svg.append("text")
            .attr("id", "title")
            .attr("x", width / 2)
            .attr("y", 20)
            .attr("text-anchor", "middle")
            .text("United States GDP (1947 - 2015)");
    });