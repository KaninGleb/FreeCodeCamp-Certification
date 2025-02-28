const width = 960;
const height = 600;

// Creating an SVG element
const svg = d3.select("#map")
    .attr("width", width)
    .attr("height", height);

// Tooltip
const tooltip = d3.select("#tooltip");

// Uploading country data
fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json")
    .then(response => response.json())
    .then(countiesData => {
        return fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")
            .then(response => response.json())
            .then(educationData => ({ countiesData, educationData }));
    })
    .then(({ countiesData, educationData }) => {
        console.log(educationData); // Checking the educationData structure
        console.log(countiesData); // Checking the countiesData structure

        const colorScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, d3.max(educationData, d => d.bachelorsOrHigher)]);

        const path = d3.geoAlbersUsa()
            .translate([width / 2, height / 2])
            .scale([1000]);

        svg.append("g")
            .selectAll("path")
            .data(topojson.feature(countiesData, countiesData.objects.counties).features)
            .enter().append("path")
            .attr("class", "county")
            .attr("d", path)
            .attr("fill", d => {
                const educationValue = educationData.find(e => e.fips === d.id);
                return educationValue ? colorScale(educationValue.bachelorsOrHigher) : "#ccc";
            })
            .attr("data-fips", d => d.id)
            .attr("data-education", d => {
                const educationValue = educationData.find(e => e.fips === d.id);
                return educationValue ? educationValue.bachelorsOrHigher : 0;
            })
            .on("mouseover", (event, d) => {
                const educationValue = educationData.find(e => e.fips === d.id);
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(`${educationValue.area_name}, ${educationValue.state}<br>${educationValue.bachelorsOrHigher}%`)
                    .attr("data-education", educationValue.bachelorsOrHigher)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });

        // Creating a legend for education
        const legendWidth = 300;
        const legendHeight = 30;

        const legendSvg = d3.select("#legend")
            .append("svg")
            .attr("width", legendWidth)
            .attr("height", legendHeight);

        const legendScale = d3.scaleLinear()
            .domain([0, d3.max(educationData, d => d.bachelorsOrHigher)])
            .range([0, legendWidth]);

        const legendAxis = d3.axisBottom(legendScale)
            .ticks(5)
            .tickFormat(d => `${Math.round(d)}%`);

        legendSvg.append("g")
            .attr("transform", `translate(0, ${legendHeight / 2})`)
            .call(legendAxis);

        // Add color rectangles to the legend
        const gradient = legendSvg.append("defs")
            .append("linearGradient")
            .attr("id", "legend-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.selectAll("stop")
            .data(colorScale.range())
            .enter().append("stop")
            .attr("offset", (d, i) => i / (colorScale.range().length - 1))
            .attr("stop-color", d => d);

        legendSvg.append("rect")
            .attr("width", legendWidth)
            .attr("height", legendHeight / 2)
            .style("fill", "url(#legend-gradient)");
    });