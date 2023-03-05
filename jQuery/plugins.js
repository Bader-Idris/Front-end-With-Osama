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
  $("Sec-lesson").css("color", "#1f8ad2");
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
    $(".Thirlesson").hide();
    $(".Sec-lesson").css("background-color", "black");
    $(this).dblclick(function (e) {//this dblclick is double click
      $(this).css("color", "green");
    });
  });
  // ease For JS Pros
  // $(this).mouse((e)=> {
  //   $("span").hide();
  // });
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
// fade funcs are built into CSS opacity
// fadeIn(speed, callbackFunc)
// fadeOut(speed, callbackFunc) is opposite to fadeIn
// fadeToggle() as any other toggle func
// fadeTo(speed,Opacity, callbackFunc)

// reveals opacity from 0 to 1, if display is none, it gets block using opacity
// looks like we need to use func as toFix() in JS

// $(function(){// it's not working in 3.6 jQuery compressed VERSION
//   $("button").click(()=>{
//     $(this).fadeTo(5000,0.2,()=>{
//       $('nesP').fadeOut(2000);
//     });
//   });
// });

// 6th lesson
/*
slideDown() if its display is none, it appears 🔽, its height stretches
slideUp(), opposite to slideDown
  SlideToggle()
*/
// 7th lesson [Animate]IMPORTANT
$(function () {
  $("button").click(() => {
    $(".nesP").animate({
      width: "+=200px",
      margin: "0 50%",
      border: "toggle",//hide show, etc 🔴can be used🔴 LOVELY && IMPORTANT[toggleIsShow||Hide]
      position:"relative",
      backgroundColor:"black",
    }, 2000,()=>{$(".sevlesson").fadeIn(3000);});
  });
});
// width: "+=50px" this one means, current value plus ...[relative values]
// $("el").animate({param},speed, callbackFunc);

// with animate, it's Ascending a:z[in a row] not as other methods, together
// if we use +1 animate() functions as 
// $(()=>{
//   $(".nesP").animate({
//     width: "+=200px",
//   });
//   $("*").animate({
//     backgroungColor: "transparent",
//   });
// })

// we can use animate with popups

// 8th lesson
// stop() it stops the animation
$(document).ready(()=>{
  $(".eighth").animate({
    width: "+=100px",
    height: "+=50px",
    listStyle:'none',//this didn't work, too bad for it
  },1000);
  $(".eighth").animate({
    left:"+=200px",
  });
  $("button").click(()=>{
    $(".eighth").stop()
  })
});