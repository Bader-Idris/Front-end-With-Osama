// 2015th course
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
  // alert("hi " + myBaby);//it's noisy
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
  .first() can't add argus inside ()
  .last()
  .eq() as index of arrays (-1 is last index)
  .filter()
  .not() opposite to .filter()
*/
$(()=>{
  // $("div").first().next().css({
  //   //css can't do this easily
  // });
  // $("div").prev().css()
  // $("div").filter().prev().css()
  // //any prev to filter('sel')[can add jQuery Objects && func]
  // $("div").not(function(par){
  //   return par === 1;// excludes length 1 of index elements
  // }).css("color","#eee")
});

// 20th lesson selector Reference introduction [🔴IMPORTANT🔴]
/* seperate selectors with comma as[#a, .b]
  [*] even used in linux
  [.class]
  [#id]
  [el]
  $("el:jQuery")as[first, last eq(n),[:even, :odd]are used though]
*/
// 21st lesson continuing selector Reference
/* as p:first

  :first picks first result
  :first-child
  :last
  :last-child
  :first-of-type [as css]
  :last-of-type
  :nth-child()
  :nth-last-child() counts descendingly[z:a]
  :nth-of-type()
  :nth-last-of-type()

  difference between sibling-child and normal one is as:
    picks any first selected el, as if body&div have Ps,
    both will be selected
*/

// 22nd lesson selector Reference
/*
  :only-child [lonely el]
  :only-of-type [lonely type]
  $("div ~ p") [every p sibling to div]
  :gt() [greater than] gt(1) after 2 index
  :lt() [less than]
*/

// 23rd lesson selector Reference continuing
/*
  $(":header") [every head 1-6]
  :animated [under animation] when using in Events, it'll be better
  $(sth).focus() as css input focus
  :focus [being focused]
  :has("")
  :empty [when el's innerHTML is null]
  :parent every El which has  a parent as <p>st</p> NOT <p></p>
  :hidden picks elements displayed none, or width/height 0[not working with visibility]
  :visible opposite to :hidden
  :root higher than html in priority[where to put vars]
  :lang as Arabic or rtl langs
*/
$(function () {
  $("body *:contains('JavaScript')").animate({
    width: '500px',
  }, 3000).css({
    background: "yellow",
    color: '#000',
  });
  // out of the course, using vanilla JS
  let formSub = document.querySelector("input[type='submit']");
  formSub.onclick = ((e)=> {
    e.preventDefault()
    formSub.parentElement.remove()
  });
  // -------- end Of JS-------------
  // $("div:visible").slideToggle();when clicked, it's nice
});

// 24th lesson selector Reference continuing [Attributes]
/*
  [atr] as [src]
  [atr='sth']
  element[atr='sth']
  element[atr!='sth'] not equal to attr

  [atr*='sth'] if atr="sth and other text" [[atr*]] is as includes()in JS
  ~= separates by word, so [*='st'✔️] but [~='st'❌] it needs all word
  ^= means starting with
*/

// 25th lesson selector Reference last V
/*
  $(":text") to pick specific types as $(":input")
*/

// 26th lesson Events Reference
/*
  after 1.7 jQuery Version, .on() took the place of bind(),live(), and delegate()
  [they similar to [addEventListener]]
  .bind(Event, Data, Func, Map)
  .on()

*/
$(function(){
  "ues strict";// For JS Lint Errors[he typed]
  $(".normal").bind("click", function(){
    // $(this).hide();
  });
  $(".normal").bind("mouseenter mouseleave", function(){// many events
    $(this).toggleClass("colored");
  })
});
// a nicer way is this:[🔴IMPORTANT TO LEARN HOW TO CREATE IT WITH 🍦 JS🔴]
$(function (){
  $(".map").on({// it didn't work in bind, unlike .on()
    click: function () { $(this).text("You Have Clicked On Me"); },
    dblclick: function () { $(this).text("You Have Clicked On Me Twice"); },
    mouseenter: function () { $(this).text("You Have Hovered ON Me"); },
    mouseleave: function () {  $(this).text("Mouse Went Out!"); },
    // many objects are made as Spread(...) operators in 🍦 JS
  });
  // custom Event, not gonna use bind(), it's deprecated
  $('.customize').on("myCustomizedEvent",function (event, userInteraction) {
    $(this).hide(1500);
  });
  //this is how to trigger it:
  $('.customize').prev().dblclick(function(){
    $('.customize').slideUp("myCustomizedEvent");//here we triggered it
  });
  // with trigger we can modify log in pages/forms 💚 LOVELY >>>
});

// 27th lesson Event Reference live() deprecated in 1.9 jQuery
// live(event, data, func)
// delegate and on do same functionalities in live()

// $(content).insertAfter(selector)
// $(content).insertBefore(selector)

$(()=>{//it didn't work! whatever!!!
  $("button").on("click", function(){//if live is a bug, use on()
    $("<p>This Is Created By on/live</p>").insertAfter($(this));
  });
  $("p").on("click", function(){
    $(this).remove(1000);
  });
})
// 28th lesson Event Reference, delegate()
// delegate() and live() make changes to current element, and future element[labor[😦]]
// $(parent).delegate(".child",Event , function)

// 29th lesson Event Reference .on() [The Most Important One]
// syntax: .on(Event, child Selector[Opt], Data, Function, Map)


$(()=>{
  "use strict";//I think it's user strict now
  $('body').on('mouseenter mouseleave','.customize', function(){
    $(this).toggleClass("colored");//👆multi-event 
  });
  // $(this).height(heightVariable).width(widthVariable);
});
//🔴it's important to make .on() with parent and its children,
//🔴  not children directly to allow future events work well unlike normal .click() func

$(()=>{
  $("body").on("click","button", function(){//if live is a bug, use on()
    $("<p>Using .on() and its preferred usages</p>").insertAfter($(this));
  });
  $("body").on("click","p", function(){//🔴important as "body" then "selected child"🔴
    $(this).fadeOut(1000);
  });
});

// 30th lesson Event Reference PreventDefault
$(document).ready(function(){
  "use strick";
  $("a").on('click',function (e) {
    e.preventDefault();
    // he said in 🍦JS it was as <a onclick="return false"></a>
    if(e.isDefaultPrevented()){//as its name
    };//sth
  });
});

// 31st lesson Event Reference keyDown, keyPress, keyUp
// specified for keyboard: keystrokes [lovely💚]
$(function(){
  "use strick";
  $("holder").on('keyDown','input',function(){
    $(".resultsAye").text("You Are Going TO Click On A Key");
    // weird, and unbelievable! 
  });
  $("holder").on('keypress','input',function(){
    $(".resultsAye").text("You're Pressing On A Key");
  });
  $("holder").on('keyup','input',function(){
    $(".resultsAye").text("You Left Your KeyStroke");
  });
})
// why do we use it!?
/**
 * because when working with advertisement, we need to count clicks!!
 * keyup is better for previewing text
 */
// 32nd lesson event reference change
// .change() function works with focused input, when blur it output results
// and it works when options in select are changed

// we can use it in selectBox when users change!! 
// it's great for programmers he said

// 33rd lesson event reference focus, blur
// $("form").on('focus','input',function(){});

// 34th lesson event reference [one]
// its func is as on() but works only once
// if we have multi-events as click dblclick it'll use both then stop
// it might be useful more than on() itself, Osama said

// 35th lesson event reference: select
$(()=>{
  "user strict";
  $("textarea").on('click',function(){
    $(this).select(function(){//when I click on textarea, it selects all text
      //functions inside, as you can see
      $(this).after("Text Copied").delay(2000).fadeOut();
    });
  })
});

//36th event reference resize[MOST IMPORTANT IN RESPONSIVE 2015]
$(()=>{
  $(window).on("resize",function(){
  let wid = $(window).width(),
      hei = $(window).height();
    if(wid > 2000)console.log(wid);
    //console.log(wid, hei);
  })
  // he said it's useful when having buttons which refers to other sections
  // or any dimension traction 
});

// 37th lesson event reference scroll()
/*
  scroll()
  scrollTop() [all pixels above our position in scrolling]

  if $(window).scrollTop() > 1000 fadeIn our buttom, else fadeOut
  use it inside on() function
*/

// 38th lesson event reference PageX, PageY
$(()=>{
  $("html").mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".thirtyEight").text("X-Axis: " + e.pageX + "Y-Axis: " + e.pageY);
  });
  $("html").click(function (e) { 
    $(".circledThirty")
      .show().offset({
        left: e.pageX,
        top: e.pageY
      })
    // this offset is not explained yet, but it's awesome
    // whenever I click in the page, the circle will appear
    // on the clicked point!!
  })
})

// 39th lesson event reference Submit()
// its main useful is what it can send
//   users data without refreshing the page
// or validate the form, if length >10 , and other conditions

$(function () {
  "ues strict";
  $("form").submit(function (e) {
    // CONFIRM condition
    if($("input:first").val() === "CONFIRM"){
      $("span").text("That's correct").show();
      return;
    }
    // $("span").text("Words aren't correct").show().fadeOut(2000);
    e.preventDefault();//as we know, making false as default
  })
})
//we can insertBefore, a div including, "Please type: CONFIRM" to delete your account
// and a span after(), to appear results

// 40th lesson Effects reference [Delay] [🔴EXTREMELY IMPORTANT🔴]
//when clicked $(sth).text("blabBlaBla").fadeIn("fast").delay(5000).fadeOut("slow");

// 41st lesson HTML&&CSS reference [clone]
// $(sth).clone(false)[as JS, default is false] it reject events from main cloned element
// if we change css style to main element, when true, it'll clone these changes[when made with .on()]
// he used it as:[when clicked with .on()]
// $(".main").clone(true).appendTo("body");

// 42nd lesson HTML&&CSS reference [detach]
// it's similar to remove().
// the main difference is: it doesn't remove data and events to an El
// so, with remove(), any el will lose its events and data, when invoked,
// but detach() will keep 'em, so we'll not need to recreate them or refresh page

// 43rd lesson HTML&&CSS reference [hasClass] you'll use it a lot, Osama Said
$(() => {
  $("li").each(function (e, value) {
    $('li').on({
      // click: function () {},//I love this combination
      click: function () {
        if ($(this).hasClass('active')) {
          $(this).css({
            backgroundColor: "#fff",//can use localStorage lessons here
            Color: "black"
          })
          //💚you can see drop down lists, Osama said💚
          // we can give active class to its parent, as:
          $(this).parent().parent().css()// to go to its grandparent
        }
      }
    })
  })
})

// same func as forEach in 🍦js
// $.each(collection, function (indexInArray, valueOfElement) { });

// 44th lesson HTML&&CSS reference [offset][IMPORTANT]
// it's an object with top and left directions[needs to change position from default]

// as any object, we can access its properties rapidly as:
// $(sth).offset().top or left
// $(()=>{
//   $(window).scroll(function () {
//     // console.log($(this).scrollTop());
//     // console.log($("div").offset().top);
//     let scrolling = $(this).scrollTop(),
//         divOffset = $("div").offset().top;
//     if(scrolling >= divOffset){
//       $("div").fadeOut(); //or any effect
//     }
//   });
// })

// 45th lesson HTML&&CSS reference [Position]
// similar to offset, offset counts outer margin,
//  but position counts from its parent not from document[html]
// position doesn't count padding

// 46th lesson HTML&&CSS reference [prop] property
// it's a boolean function, not as attr() which picks up its value
// so if we ask $(sth).prop("disabled"); it gives false or true,
//  but with $(sth).attr("disabled");// it'll give a string, if not output will be undefined
// so with [.prop()] we can set it as true.
// if in HTML disabled is true, we type:
// $('input').prop('disabled',false);// means Disable disable itself!
$(".customize").prop({
	name:"nigga",
	disabled:false,
	id:"baby",
}) // example of using object in prop()
// Osama said, prop() is more important than attr()

// 47th lesson HTML&&CSS reference [replace]
// $(selector).replaceWith(newContent);// this replaces innerHTML
// $(()=>{
//   'use strict';
//   $(".div").click(function () { 
//     $(this).replaceWith("<input type='text' value='"+ $(this).text()+" >")
//     $("button").fadeIn();//must be hidden previously
//   });
//   $("button").click(function () {
//     $("input").replaceWith("<div>"+ $('input').val() +"</div>")
//     $("button").fadeOut();
//   })
// })
//replaceWith removes event handlers, most important lesson in replaceWith() function

// 48th lesson HTML&&CSS reference [TOP_LEFT]
// visibility: hidden; equals to opacity:0; the element takes place, but it's hidden
$(function () { 
  'use strict';
  $(window).scroll(function () { 
    // console.log('window scroll Top = ' + $(this).scrollTop());
    // console.log('Test Lesson Offset = ' + $(".test-lesson").offset().top);
    let divTop = $(".test-lesson").offset().top;
    let windowScrollTop = $(window).scrollTop();
    if (windowScrollTop >= divTop ) {
      $('.test-lesson').animate({
        opacity:1,
        // he didn't make it when we get near it, only after passing it
      },1000);
    }
  });
});
// if we say $(window).scrollTop(1000); it'll go there directly
// we can use it when user clicks on the purchase button
// or when he's down, we get 'em upwards to 0

// 49th lesson HTML&&CSS reference [Wrap]
// wrap, unwrap
// $('span').wrap('<div></div>')// in an adding button
// $('span').unwrap()// in a remove button

// we can wrap elements with header, or paragraph, as our situation asks

// 50th lesson traversing reference [each] same as forEach in 🍦js
//  go to 641 line to see our each example, with hasClass function

// 51st lesson traversing reference [has]
// has can be hasClass or (has Element) class, or any other attribute[I think]
// $(parent).has(child).ourFunc() // even as $('p').has("span")
// we can add many as other selectors (p, div) or has(p, strong, span, .test)

// 52nd lesson traversing reference [is]
// as a span inside a div, using click function on span 
// if ($(this).parent().is('div')){
//   console.log('Yes I am a div');
// }

// if we ask for many elements we type:
// if ($(this).parent().is('div, p, whatever, .nigga'))//this is lovely
// if ($(this).is(':first-child'))//lovelier 💚 is() and :contains together are great, Osama said

// 53rd lesson traversing reference [end] last video
// it ends the chain of an element, and returns it to its original situation
// $("div").find('span').css("color", "#00f").end()
//     .find('strong').css("color", "#f00");//because second one is not valid normally; we use end()
//     //so it starts searching after that point, in same ('div')

// a better way is to change the color of a span, and then change the color of its parent itself
// $('div').find('span').css("color", "#00f").end()
//     .css('color', '#f00');

// END OF THE COURSE; NOW GO TO 2018TH PRACTICAL COURSE💪