/*
  Introduction to jQuery
  jQuery 2015 course:
  jQuery is an open source library, used to simplify working between HTML && JS, built-in JS code
  published in 2006 after a year of development
  it's specificly useful to non-profession JS coders
  jQuery works well in every browser, even too old ones as EI 6
*/

// 2nd lesson
// $("p").hide();//this hides each P in the page

// $ represents jQuery, ("HTML Element"), hide() is our action

// instead of onload function in JS, jQuery uses this
$(document).ready(function(){
  //it doesn't wait for images to load, only code, not as JS
  $("body>p").hide();// this is best practice, to not have bugs as out of ready func
  $("2nd-lesson").css("color", "#1f8ad2");
  $("body div").css("font-size", "40px");

});

// $(function(){
  //same as ready function, no difference
// });
// 🔴Download jQuery to make this code works🔴, it's an only one file for either min.ver or uncompressed one
// compressed is 88kb and uncompressed is 298kb, and 1st is difficult to modify
// we'll use compressed one for learning purposes, calling it as a normal js script



// 3rd lesson
$(function(){//onload func
  $(".nesP").click(function (e) { 
    $(".3rdlesson").hide();
    $(".2nd-lesson").css("background-color", "black");
    $(this).dblclick(function (e) {//this dblclick is double click
      $(this).css("color", "green");
    });
  });
  // ease For JS Pros
  $(this).mouse((e)=> {
    $("span").hide();
  });
});
// events, same as JS
/*
  mouseEnter
  mouseLeave
  hover(over, out); it's lovely
  and other normal events
*/

/*
  $("p").hide(speed, callbackFunc);
  show()//making it block, instead of none
  toggle()//the love AYK in JS, but here it's for display

  default speed is 400 milliseconds, 2000 means 2s
  there're "slow" && "fast"
*/
// $(document).ready(function(){
//   $("button").click(function(){
//     $('p').hide(3000,()=>{
//       $("button").hide();
//     });
//   });
// });

// 5th lesson