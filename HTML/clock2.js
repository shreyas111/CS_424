/* Creating the Tootips and the Divs*/
        var tooltip = d3.select('body').append('div')
                         .attr('id', 'nameToolTipDiv')
                         .style('position', 'absolute')
                         .style('text-align', 'center').text("")
                         .style('opacity', 0)
                         .style('line-height', 1)
                         .style('font-weight', 'bold')
                         .style('padding', '12px')
                         .style('background', 'black')
                         .style('color', '#fff')
                         .style('border-radius', '2px')
        //.style('width', '60px')

        var converter = Math.PI / 180;

        var data = [
        { "population": 20, "flights": 0, "month": "Jan", "waitTime": 1 },
        { "population": 20, "flights": 31, "month": "Feb", "waitTime": 2 },
        { "population": 20, "flights": 61, "month": "Mar", "waitTime": 3 },
        { "population": 20, "flights": 90, "month": "Apr", "waitTime": 4 },
        { "population": 20, "flights": 120, "month": "May", "waitTime": 5 },
        { "population": 20, "flights": 150, "month": "Jun", "waitTime": 6 },
        { "population": 20, "flights": 180, "month": "Jul", "waitTime": 7 },
        { "population": 20, "flights": 210, "month": "Aug", "waitTime": 8 },
        { "population": 20, "flights": 240, "month": "Sep", "waitTime": 9 },
        { "population": 20, "flights": 270, "month": "Oct", "waitTime": 10 },
        { "population": 20, "flights": 300, "month": "Nov", "waitTime": 11 },
        { "population": 20, "flights": 330, "month": "Dec", "waitTime": 12 }
        ];

    var dataSet;
    var monthFlights = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var avgMonthWaitTimes = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var waitTimesCount = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var maxWaitTime = 0;
 
	function readFile(airportCode, year)
    {       
         dataSet='';
         monthFlights = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
         avgMonthWaitTimes = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
         waitTimesCount = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
         maxWaitTime = 0;



     d3.csv(airportCode + '_' + year + '.csv', function (error, waitData) {
          if (error) throw error;
         dataSet = waitData;
         getData(dataSet);

    });

    function getData(dataSet) {

    dataSet.forEach(function (d, i) {

    var month = d.Date.split('/')[0];

    if(month=='1')
    {
    monthFlights[0] = monthFlights[0] + parseInt(d.Flights);
    avgMonthWaitTimes[0] = avgMonthWaitTimes[0] + parseInt(d.Average);
    waitTimesCount[0] = waitTimesCount[0] + 1;
    }
    else if (month=='2')
    {
    monthFlights[1] = monthFlights[1] + parseInt(d.Flights);
    avgMonthWaitTimes[1] = avgMonthWaitTimes[1] + parseInt(d.Average);
    waitTimesCount[1] = waitTimesCount[1] + 1;
    }
    else if (month == '3') {
    monthFlights[2] = monthFlights[2] + parseInt(d.Flights);
    avgMonthWaitTimes[2] = avgMonthWaitTimes[2] + parseInt(d.Average);
    waitTimesCount[2] = waitTimesCount[2] + 1;
    }
    else if (month == '4') {
    monthFlights[3] = monthFlights[3] + parseInt(d.Flights);
    avgMonthWaitTimes[3] = avgMonthWaitTimes[3] + parseInt(d.Average);
    waitTimesCount[3] = waitTimesCount[3] + 1;
    }
    else if (month == '5') {
    monthFlights[4] = monthFlights[4] + parseInt(d.Flights);
    avgMonthWaitTimes[4] = avgMonthWaitTimes[4] + parseInt(d.Average);
    waitTimesCount[4] = waitTimesCount[4] + 1;
    }
    else if (month == '6') {
    monthFlights[5] = monthFlights[5] + parseInt(d.Flights);
    avgMonthWaitTimes[5] = avgMonthWaitTimes[5] + parseInt(d.Average);
    waitTimesCount[5] = waitTimesCount[5] + 1;
    }
    else if (month == '7') {
    monthFlights[6] = monthFlights[6] + parseInt(d.Flights);
    avgMonthWaitTimes[6] = avgMonthWaitTimes[6] + parseInt(d.Average);
    waitTimesCount[6] = waitTimesCount[6] + 1;
    }
    else if (month == '8') {
    monthFlights[7] = monthFlights[7] + parseInt(d.Flights);
    avgMonthWaitTimes[7] = avgMonthWaitTimes[7] + parseInt(d.Average);
    waitTimesCount[7] = waitTimesCount[7] + 1;
    }
    else if (month == '9') {
    monthFlights[8] = monthFlights[8] + parseInt(d.Flights);
    avgMonthWaitTimes[8] = avgMonthWaitTimes[8] + parseInt(d.Average);
    waitTimesCount[8] = waitTimesCount[8] + 1;
    }
    else if (month == '10') {
    monthFlights[9] = monthFlights[9] + parseInt(d.Flights);
    avgMonthWaitTimes[9] = avgMonthWaitTimes[9] + parseInt(d.Average);
    waitTimesCount[9] = waitTimesCount[9] + 1;
    }
    else if (month == '11') {
    monthFlights[10] = monthFlights[10] + parseInt(d.Flights);
    avgMonthWaitTimes[10] = avgMonthWaitTimes[10] + parseInt(d.Average);
    waitTimesCount[10] = waitTimesCount[10] + 1;
    }
    else if (month == '12') {
    monthFlights[11] = monthFlights[11] + parseInt(d.Flights);
    avgMonthWaitTimes[11] = avgMonthWaitTimes[11] + parseInt(d.Average);
    waitTimesCount[11] = waitTimesCount[11] + 1;
    }


    });

    for (var i = 0; i < 12; i++)
    {
    avgMonthWaitTimes[i] = parseInt(avgMonthWaitTimes[i] / waitTimesCount[i]);
    if (avgMonthWaitTimes[i] > maxWaitTime) {
    maxWaitTime = avgMonthWaitTimes[i];
    }
    }
    createRadialVis(airportCode, year);
    }

    }
    
	
	function createRadialVis(airportCode, year)
    {

        var data = [
             { "population": 20, "flights": 0, "month": "Jan", "waitTime": 1 },
             { "population": 20, "flights": 31, "month": "Feb", "waitTime": 2 },
             { "population": 20, "flights": 61, "month": "Mar", "waitTime": 3 },
             { "population": 20, "flights": 90, "month": "Apr", "waitTime": 4 },
             { "population": 20, "flights": 120, "month": "May", "waitTime": 5 },
             { "population": 20, "flights": 150, "month": "Jun", "waitTime": 6 },
             { "population": 20, "flights": 180, "month": "Jul", "waitTime": 7 },
             { "population": 20, "flights": 210, "month": "Aug", "waitTime": 8 },
             { "population": 20, "flights": 240, "month": "Sep", "waitTime": 9 },
             { "population": 20, "flights": 270, "month": "Oct", "waitTime": 10 },
             { "population": 20, "flights": 300, "month": "Nov", "waitTime": 11 },
             { "population": 20, "flights": 330, "month": "Dec", "waitTime": 12 }
        ];

    var spiral = d3.radialLine()
    .angle(function (d, i) { return 100 * converter; })
    .radius(function (d, i) { return 150; })

    var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;

    var outer1 = 30
    var outer2 = 70;
    var inner1 = 90;
    var inner2 = 120;
    var translatew = 50;
    var translateh = 50;

    var color = d3.scaleOrdinal()   
    .range(["#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#98abc5"]);
 
    
    var arc = d3.arc()
    .outerRadius(radius - outer1)
    .innerRadius(radius - outer2);

    var arc2 = d3.arc()
    .outerRadius(radius - inner1)
    .innerRadius(radius - inner2);

    var maxLineRadius = radius - inner2;

    var pie = d3.pie()
    .sort(null)
    .value(function (d) { return d.population; });

    var pie2 = d3.pie()
    .sort(null)
    .value(function (d) { return d.population; });

    

    var svg = d3.select("body").append("g").attr("id", 'svggroup').append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(" + ((width / 2) + 60) + "," + ((height / 2) + 25) + ")");
    
	var headerText=airportCode + ' ' + year; 
    svg.append('text')
    .text(headerText)
    .attr('x', "-30px")
    .attr('y','-160px')
	.attr('id','headerTextId')

    var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

    function getColor(d,i)
    {
       return color(monthFlights[i]);
    }

    g.append("path")
    .attr("d", arc)
    .style("fill", function (d,i) { return color(monthFlights[i]); })
    .attr('id', function (d, i) { return "arc" + i })
    .on("mouseover", function (d, i) {

    d3.select(this)
    .style("fill", "orange")
    .style('opacity', 1);
    var center = arc.centroid(d);
    var xPosition = center[0];
    var yPosition = center[1];
    /*if (xPosition > 0)
    {
    xPosition = xPosition + 300;
    }
    else
    {
    xPosition = xPosition +200;
    }
    if (yPosition > 0) {
    yPosition = yPosition + 200;
    }
    else {
    yPosition = yPosition + 400;
    }*/

    //console.log(center);


    tooltip.text("Inbound Flights:  " + monthFlights[i]).style('opacity', 1).transition()
    .style("color", "orange")
    .style("left", (300) + "px")
    .style("top", (300) + "px")

    })
    .on("mouseout", function (d, i) {

    var color = getColor(d, i);

    tooltip.style('opacity', 0);

    d3.select(this)
    .style("fill", color)
    .style('opacity', 1);
    })

    g.append("text")
    .transition().duration(1000)
    .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    //.text(function (d) { return d.data.flights; });
    .text(function (d, i) { return monthFlights[i]; });

    var g2 = svg.selectAll(".arc2")
    .data(pie2(data))
    .enter().append("g")
    .attr("class", "arc2");

    g2.append("path")
    .attr("d", arc2)
    .style("fill", function (d, i) { return color(avgMonthWaitTimes[i]); })
    .attr('id', function (d, i) { return "arc2" + i })


    g2.append("text")
    .transition().duration(2000)
    .attr("transform", function (d) { return "translate(" + arc2.centroid(d) + ")"; })
    .attr("dy", ".35em")
    //.style("color", "orange")
    .attr("fill", function (d, i) {

    if (avgMonthWaitTimes[i] >= 0 && avgMonthWaitTimes[i] <= 9) {
    return "green";
    }
    if (avgMonthWaitTimes[i] > 9 && avgMonthWaitTimes[i] <= 12) {
    return "blue";
    }
    if (avgMonthWaitTimes[i] > 12) {
    return "red";
    }

    })
    //.text(function (d,i) { return d.data.waitTime; });
    .text(function (d, i) { return avgMonthWaitTimes[i]; });


    function calculateX(data, index) {

    var waitTime = data;
    if (maxWaitTime == 0)
    {
    maxWaitTime = 1;
    }

    //console.log('max' + maxWaitTime);
    var length = (waitTime / maxWaitTime) * maxLineRadius;
    if (index == 0) {
    var angle = 165;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 1) {
    var angle = 135;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 2) {
    var angle = 105;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 3) {
    var angle = 75;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 4) {
    var angle = 45;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 5) {
    var angle = 15;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 6) {
    //var angle = 195;
    var angle = 345;
    var x = Math.sin(angle * converter) * length
    return x;
    }
    else if (index == 7) {
    //var angle = 225;
    var angle = 315;
    var x = Math.sin(angle * converter) * length;
    return x;

    }
    else if (index == 8) {
    //var angle = 255;
    var angle = 285;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 9) {
    //var angle = 285;
    var angle = 255;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 10) {
    //var angle = 315;
    var angle = 225;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    else if (index == 11) {
    var angle = 195;
    //var angle = 345;
    var x = Math.sin(angle * converter) * length;
    return x;
    }
    }

    function calculateY(data, index) {

    var waitTime = data;
    if (maxWaitTime == 0)
    {
    maxWaitTime = 1;
    }
    var length = (waitTime / maxWaitTime) * maxLineRadius;
    if (index == 0) {
    var angle = 165;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 1) {
    var angle = 135;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 2) {
    var angle = 105;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 3) {
    var angle = 75;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 4) {
    var angle = 45;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 5) {
    var angle = 15;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 6) {
    //var angle = 195;
    var angle = 345;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 7) {
    //var angle = 225;
    var angle = 315;
    var y = Math.cos(angle * converter) * length;
    return y;

    }
    else if (index == 8) {
    //var angle = 255;
    var angle = 285;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 9) {
    //var angle = 285;
    var angle = 255;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 10) {
    //var angle = 315;
    var angle = 225;
    var y = Math.cos(angle * converter) * length;
    return y;
    }
    else if (index == 11) {

    var angle = 195;
    //var angle = 345;
    var y = Math.cos(angle * converter) * length;
    return y;
    }

    }
    svg.selectAll(".line")
    .data(avgMonthWaitTimes)
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", 0)
    .transition().duration(3000)
    .attr("x2", function (d, i) {
    var x = calculateX(d, i);
    return x;
    })
    .attr("y2", function (d, i) {
    var y = calculateY(d, i);
    return y;
    })
    /*.attr("stroke", function (d) {

    if (d.waitTime >= 0 && d.waitTime <= 4) {
    return "green";
    }
    if (d.waitTime > 4 && d.waitTime <= 8) {
    return "blue";
    }
    if (d.waitTime > 8 && d.waitTime <= 12) {
    return "red";
    }
    });*/
    .attr("stroke", function (d,i) {

    if (d>= 0 && d <= 9) {
    return "green";
    }
    if (d > 9 && d <= 12) {
    return "blue";
    }
    if (d > 12 ) {
    return "red";
    }
    });


    g.selectAll('.txt')
    .data(data)
    .enter()
    .append("text")
    .attr("class", "txt")
    .attr('dy', -10)
    .append("textPath")
    .attr("xlink:href", function (d, i) { return "#arc" + i }) //place the ID of the path here
    .style("text-anchor", "middle") //place the text halfway on the arc
    .attr("startOffset", "20%")


    .text(function (d) { return d.month; })
    //.attr("stroke", "orange")
    .attr("fill", function (d, i)
    {
    //return color(d.month);
    return color(monthFlights[i]);
    }
    )
    //.style("color","orange")
    /*svg.append("text")
    .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor", "middle") //place the text halfway on the arc
    .attr("startOffset", "50%")
    .text("Yay, my text is on a wavy path");*/
    }