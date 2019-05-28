// function giveMeEms(pixels) {
//     var baseValue = 16;

//     function doMath(){
//         return pixels/baseValue;
//     }

//     return doMath;
// }

// var smallSize = giveMeEms(12);
// var medSize = giveMeEms(18);
// var largeSize = giveMeEms(24);
// var xLargeSize = giveMeEms(32);


// console.log("small:", smallSize());
// console.log("medium:", medSize());
// console.log("large:", largeSize());
// console.log("xlarge:", xLargeSize());

// var testimonials = [{
//     "name": "cederholm",
//     "attribution": "John Doe, Some Company",
//     "quote": "We\u2019ve been using <a href=\"https://www.apollowebstudio.com\">Apollo Web Studio</a> here at Company Name for years. The services offered have been indispensable to our little company."
// }, {
//     "name": "lisagor",
//     "attribution": "John Doe 2, Another Company",
//     "quote": "<a href=\"https://www.apollowebstudio.com\">Apollo Web Studio</a> is the web development company of the FUTURE.  The quality of work they provide for the price is just unmatched and blows the competition out of water or space in thee situation!"
// }]


// testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
//     document.getElementById("quote-quote").innerHTML = testimonial.quote
//     document.getElementById("quote-attrib").innerHTML = testimonial.attribution
//     document.getElementById("quote-wrapper").className = testimonial.name


function myFunction() {
    var x = document.getElementsByClassName("day");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }