(async () => {
    // Fetch data
    const [educationData, countyMapa] = await Promise.all([
        d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'),
        d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
    ]);

    // Map education data to county FIPS
    const educationMap = {};
    educationData.forEach(d => {
        educationMap[d.fips] = {
            state: d.state,
            area_name: d.area_name,
            education: d.bachelorsOrHigher
        };
    });

    // Create SVG container
    const svg = d3.select('body')
        .append('svg')
        .attr('width', 950)
        .attr('height', 600);

    // Draw counties
    svg.selectAll('.county')
        .data(topojson.feature(countyMapa, countyMapa.objects.counties).features)
        .enter()
        .append('path')
        .attr('class', 'county')
        .attr('data-fips', d => d.id)
        .attr('data-education', d => educationMap[d.id]?.education || 0) // Default to 0 if data is missing
        .attr('fill', d => {
            const education = educationMap[d.id]?.education || 0;
            return education <= 5 ? '#f1eef6' :
                education <= 15 ? '#d0d1e6' :
                    education <= 25 ? '#a6bddb' :
                        education <= 35 ? '#74a9cf' :
                            education <= 45 ? '#3690c0' :
                                education <= 55 ? '#0570b0' : '#045a8d';
        })
        .attr('d', d3.geoPath())
        .on('mouseover', function (event, d) {
            // When the mouseover event is triggered, show the tooltip
            tooltip.transition()
                .duration(200) // Duration of the transition
                .style('opacity', 0.9) // Make the tooltip visible
                .attr('data-education', educationMap[d.id].education);
            // Set the content of the tooltip
            tooltip.html(`${educationMap[d.id].area_name || 'Unknown'}, ${educationMap[d.id].state}: ${educationMap[d.id].education}%`)
                .style('left', (event.pageX + 10) + 'px') // Position the tooltip horizontally
                .style('top', (event.pageY + 10) + 'px') // Position the tooltip vertically
                .style("background-color", "black");
        })
        .on('mouseout', function (d) {
            // When the mouseout event is triggered, hide the tooltip
            tooltip.transition()
                .duration(100) // Duration of the transition
                .style('opacity', 0); // Hide the tooltip
        });

    // Create the tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("id", "tooltip")
        .style("opacity", 0) // Set the initial opacity of the tooltip
        .style("position", "absolute")
        .style("background-color", "steelblue") // Tooltip background color
        .style("color", "#fff") // Tooltip text color
        .style("padding", "10px") // Add padding to the tooltip
        .style("font-size", "15px") // Set the font size of the tooltip
        .style("text-align", "left"); // Align text to the left    

    // Define the linear scale for the x-axis of the legend
    const x = d3.scaleLinear()
        .domain([2.6, 75.1]) // Set the domain of the linear scale (min and max values)
        .rangeRound([600, 860]); // Map the domain to the range (min and max positions)

    const color = d3.scaleThreshold()
        .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8)) // Divide the domain range into discrete intervals
        .range(d3.schemeBlues[9]); // Define the color palette for the discrete intervals

    // Create an SVG group for the legend and position it
    const g = svg.append('g')
        .attr('class', 'key')
        .attr('id', 'legend')
        .attr('transform', 'translate(0,40)');

    // Add colored rectangles to the legend, one for each color interval
    g.selectAll('rect')
        .data(color.range().map(d => color.invertExtent(d)))
        .enter()
        .append('rect')
        .attr('height', 8) // Height of the rectangle
        .attr('x', d => x(d[0])) // Horizontal position of the rectangle
        .attr('width', d => d[0] && d[1] ? x(d[1]) - x(d[0]) : x(null)) // Width of the rectangle
        .attr('fill', d => color(d[0])); // Color of the rectangle

    // Add the x-axis to the legend
    g.call(d3.axisBottom(x)
        .tickSize(13) // Length of the tick marks on the axis
        .tickFormat(x => Math.round(x) + '%') // Format the tick marks on the axis
        .tickValues(color.domain())) // Values to display on the axis
        .select('.domain') // Select the axis line
        .remove(); // Remove the axis line

})();
