var prevBTN = document.getElementById("prev");
var nextBTN = document.getElementById("next");
var slides = document.getElementById("slides");
var carousel = document.getElementById("carousel");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var numSlides = 3;

// var timer = null;
//           timer = setInterval(function() {
//             $('#next').trigger('click');
//           }, 1000);

// Side navigation
nextBTN.onclick = function(){
  var width = carousel.offsetWidth;
  var margin = parseInt(slides.style.marginLeft);
  if (margin <= width * (numSlides - 1) * -1){
    margin = 0;
  }
  else{
    margin -= width;
  }
  slides.style.marginLeft = margin + "px";
  manageCircles(margin, width);
};

prevBTN.onclick = function(){
  var width = carousel.offsetWidth;
  var margin = parseInt(slides.style.marginLeft);
  var circle = "circle";
  if (margin >= 0){
    // margin = -1280;
  }
  else{
    margin += width;
  }
  slides.style.marginLeft = margin + "px";
  manageCircles(margin, width);
};
// Circle Navigation
circle1.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * 0  + "px";
  circle1.style.backgroundColor = "#FF6464";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "white";
};
circle2.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * -1  + "px";
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "#FF6464";
  circle3.style.backgroundColor = "white";
};
circle3.onclick = function(){
  var width = carousel.offsetWidth;
  slides.style.marginLeft = width * -2  + "px";
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "#FF6464";
};
function manageCircles(margin, width){
  circle = Math.abs(margin) / width + 1;
  circle1.style.backgroundColor = "white";
  circle2.style.backgroundColor = "white";
  circle3.style.backgroundColor = "white";
  document.getElementById("circle" + circle).style.backgroundColor = "#FF6464";
}
