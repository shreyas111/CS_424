

var svg = d3.select("#svg1");
    margin = {right: 10, left: 10};
    width = +svg.attr("width") ;
    //- margin.left - margin.right,
   height = +svg.attr("height");

var x = d3.scaleLinear()
    .domain([0, 24])
    .range([0,width])
    .clamp(true);

var slider = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height /10+ ")");

slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider.interrupt(); })
        .on("start drag", function() { hue(x.invert(d3.event.x)); })
        );

slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(24))
  .enter().append("text")
    .attr("x", x)
    .attr("text-anchor", "middle")
    .text(function(d) { return d ; });

var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

slider.transition() // Gratuitous intro!
    .duration(750)
    .tween("hue", function() {

      var i = d3.interpolate(0, 0);
      return function(t) { hue(i(t)); };

    });
//svg.append("circle").attr("id","first").attr("cx","200").attr("cy","50").attr("r","20").attr("fill","red");
function hue(h) {
  handle.attr("cx", x(h));

  svg.style("background-color", d3.hsl(h, 0.8, 0.8));
  var abs_hr = Math.floor(h);
  if (abs_hr in hr_color)
  {
  var circle_color = hr_color[abs_hr];
  d3.select("#svg").select("#STL").attr("fill",circle_color).attr("stroke",circle_color);  
//   d3.select("#svg1").select("#first").attr("fill",circle_color);
   console.log("in transition"+ abs_hr+" abs value = "+circle_color);
 }
 else{
    d3.select("#svg").select("#STL").attr("fill", d3.hsl(h*10, 0.8, 0.8)).attr("stroke","red");
    }
}
var  hr_color = 
{"1":"#a6cee3",
"2":"#1f78b4",
"3":"#b2df8a",
"4":"#33a02c",
"5":"#fb9a99",
"6":"#e31a1c",
"7":"#fdbf6f",
"8":"#ff7f00",
"9":"#cab2d6",
"10":"#6a3d9a",
"11":"#ffff99",
"12":"#b15928",
"13":"#a6cee3",
"14":"#1f78b4",
"15":"#b2df8a",
"16":"#33a02c",
"17":"#fb9a99",
"18":"#e31a1c",
"19":"#fdbf6f",
"20":"#ff7f00",
"21":"#cab2d6",
"22":"#6a3d9a",
"23":"#ffff99","24":"#b15928"};