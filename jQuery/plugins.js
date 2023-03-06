/*
  Introduction to jQuery
  jQuery 2015 course:
  jQuery is an open source library, used to simplify working between HTML && JS, built-in JS code
  published in 2006 after a year of development
  it's specifically useful to non-profession JS coders
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
//     backgroundColor: "transparent",
//   });
// })

// we can use animate with popups

// 8th lesson
// stop(clearQueue,goToEnd) it stops the animation
// stop(false);[default]
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
    $(".eighth").stop();//only stops 1st animate, as default
  })
});
// stop(true);// stops all animations
// stop(true,true);// goes to the end of the 1st animate,
// stop(false,true);//ends 1st animation, and continues others

// 9th lesson [(length -1) in animation lessons]
// chain, using JS declaration instead of $('sth')
let dido = $(document);
dido.ready(()=>{
  let ninth = $('.ninth');
  ninth.css({background:'#ff23f1'}).slideUp(800).slideDown(800)
    .fadeOut(1000);//flexible in new lines
  // these upwards are chained AYK in Vanilla JS
  ninth.css("margin-left","40px");
});
// using declaration is faster than $('sth')
// we put non-animating methods Preceding animating methods 💠🔗

// 10th lesson set && get 
// $("sth").text() picks up textContent
// .html() picks up innerHTML
// .val() picks forms' value
// .attr(attr, value) eg: .attr("target","_parent")
dido.ready(()=>{
  let cached = $(".eighth").text();
  let myBaby = "Handay";
  //making its textContent as an alert
  alert("hi " + myBaby);
  $(".tenth").text('Hello ' + cached);
  $(".tenth + li").text($(".eighth > a").attr("target"));//attrs as href etc
});
// I can use .val() to get users' fields in back-end data

/* [to set many attributes], appealingly allOfThese jQuery's are objects
  $("a").attr({
    "target":"_parent",
    "href":"www.google.com",
    "title":"Google",
    "class":"goog"
  });
*/

// 11th lesson adding elements
/*
  append()
  prepend()
  after() both comes beside elements themselves [before & after]
  before()
  appendTo()
  prependTo()

  last 2 add selected to targeted as:
    $("<div>appended</div>).appendTo("li")
*/
dido.ready(()=>{
  $(".eleventh").append("<div>appended</div>both are in same li");
  $("li")[6].prepend("prepended");
});
// before comes here
// <div> one</div>
// <div> two</div>
// after comes here

// a good example using before() and after()
dido.ready(()=>{
  $("span.add").click(()=>{
    $(".bradd").after("<input type='file'>")
  })
});
// advanced usage of appendTo() or its sibling 
/*
$(`
  <div class="sec">
      <p class="nesP">nested P</p>
  </div>
`).appendTo("li");
  ***********************OR*************************
$("<div></div>",{
  class: "divYo",
  text: "sth",
  // attributes, or any other object properties
}).appendTo("li");
*/
// we can put variables inside appendTo() object

// 12th lesson
// remove() exactly as Vanilla JS

$("sec").remove();//unlike hide, this removes el not its only height

dido.ready(()=>{
  $("button").click(()=>{
    $(".twelfth").fadeOut(1000,()=>{
      $(this).remove();//we fade it out then removeItCompletely✔️ GOOD!
    });
  });
  // empty() removes HTML inside selected El
  let thirdLe = document.querySelector(".Thirlesson");
  $(thirdLe).empty();
  $("sth").remove(":contains('This')");//alike includes() in JS
});

// 13th lesson IMPORTANT dealing with CSS
/*
  $(sth).addClass("1stClass anotherClass")[LOVELY]
  $(sth).removeClass()
  $(sth).toggleClass() adds or removes
*/
// we can use many elements as CSS eg:
// using chain, we can add classes and remove prior existing ones
$("div.itsCl, .class, #id").addClass("a b etc").removeClass("old-class")
// filters:
// $("p:first") picks up the first paragraph, $("p:last")
// $("p:eq(0)")// first index

// 15th lesson dimensions: innerWidth, innerHeight, width, height, outerWidth, outerHeight
// important to impact on behalf of special design's vanilla JS coding in functions
$(()=>{
  let dw = $(document).width();
  if(dw == 1920){
    //blab
  }
  $(".fifteenth").click(()=>{
    // console.log(true);
    $(".fifteenth").width("+="+ 50).text("broadenTo"+ $(this).width()+ "px");
  })
});

// floated left && right
$(()=>{
  $(".left").click(function(){//⚠️the crazy bug I saw, because arrow function, not valid⚠️
    $(this).width("+="+ 50);
    $(".right").width("-="+ 50);
  });
  $(".right").click(function(){
    $(this).width("+="+ 50);
    $(".left").width("-="+ 50);
  })
});
// jQuery's width() doesn't count other arguments as padding,
// so we use our dimensions🔴🔴 
// or [[box-sizing: border-box;]]

// innerWidth counts padding, not border nor outline
// outerWidth is Great ✔️
// if outerWidth(true) it counts margin with 'em
// height's argus are same as width's

// 16th lesson [[traversing]] [motion] I LOVE IT💚
/*
  $(sth).parent()
  $(sth).parents() even HTML itself
  $(sth).parentsUntil() a real love[not including last parent nor 1st parent]
*/
// $(sth).parents(".top") only .top parent from family roots

// 17th lesson
$(()=>{
  // $(".grand-parent").children("#id");//works well
  
});
// .children() picks up direct children[can't pick grandChildren]
// .find() picks any son in 👪 branch find("*") picks everything

// Great usage: find("p:contains(\"Hanady\")") 🔴IMPORTANT🔴

// 18th lesson 
/*
  siblings
  .next() as next in JS objects
  .prev() previous El
  .nextAll() as its name, all after as sibling
  .nextUntil('se') as its name, not including selected El
  .perviousUntil
*/
$(()=>{
  // this👇picks all siblings excluding selected element
  $(".sth:contains('sth')").siblings().css('color', 'negro');
  // lovely:
  $("aside > *").click(function(){
    $(this).siblings().slideUp(1000);
    $(this).siblings(".selected").slideDown();//only selected get impacted
    // using next().slideToggle() or other slideMethods is great
  });
});
// next(".sth");// only true when selected statement

// 19th lesson yet in traversing
/*
  .first()
  .last()
  .eq()
  .filter()
  .not()
*/