const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataset = data.monthlyVariance;
        const baseTemperature = data.baseTemperature;

        const margin = {top: 50, right: 30, bottom: 50, left: 60};
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select("#heatmap")
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleBand()
            .domain(d3.range(1754, 2016))
            .range([0, width])
            .padding(0.05);

        const yScale = d3.scaleBand()
            .domain(d3.range(1, 13))
            .range([0, height])
            .padding(0.1);

        const colorScale = d3.scaleSequential(d3.interpolateInferno)
            .domain([d3.min(dataset, d => baseTemperature + d.variance),
                d3.max(dataset, d => baseTemperature + d.variance)]);

        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale)
                .tickValues(d3.range(1754, 2016, 10))
                .tickFormat(d3.format("d")));

        svg.append("g")
            .attr("id", "y-axis")
            .call(d3.axisLeft(yScale).tickFormat(d => d3.timeFormat("%B")(new Date(0, d - 1))));

        svg.selectAll(".cell")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "cell")
            .attr("data-month", d => d.month - 1)
            .attr("data-year", d => d.year)
            .attr("data-temp", d => baseTemperature + d.variance)
            .attr("x", d => xScale(d.year))
            .attr("y", d => yScale(d.month))
            .attr("width", xScale.bandwidth())
            .attr("height", yScale.bandwidth())
            .attr("fill", d => colorScale(baseTemperature + d.variance))
            .on("mouseover", function (event, d) {
                const tooltip = d3.select("#tooltip")
                    .style("opacity", 1)
                    .attr("data-year", d.year)
                    .html(`Year: ${d.year}<br>Month: ${d3.timeFormat("%B")(new Date(0, d.month - 1))}<br>Temp: ${Math.round((baseTemperature + d.variance) * 10) / 10}°C`)

                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                d3.select("#tooltip").style("opacity", 0);
            });

        // Legend
        const legend = d3.select("#legend");
        const legendWidth = 300;
        const legendHeight = 20;

        const legendScale = d3.scaleLinear()
            .domain([baseTemperature + d3.min(dataset, d => d.variance), baseTemperature + d3.max(dataset, d => d.variance)])
            .range([0, legendWidth]);

        const legendAxis = d3.axisBottom(legendScale)
            .ticks(5)
            .tickFormat(d => Math.round(d * 10) / 10);

        const legendSvg = legend.append("svg")
            .attr("width", legendWidth)
            .attr("height", legendHeight);

        legendSvg.append("g")
            .attr("transform", "translate(0,10)")
            .call(legendAxis);

        legendSvg.selectAll("rect")
            .data(d3.range(0, 1, 0.2))
            .enter()
            .append("rect")
            .attr("x", d => d * legendWidth)
            .attr("y", 0)
            .attr("width", legendWidth / 5)
            .attr("height", legendHeight)
            .attr("fill", d => colorScale(baseTemperature + d * (d3.max(dataset, d => d.variance) - d3.min(dataset, d => d.variance))));
    });
