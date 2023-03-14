// instead of using plugins, in most cases you'd rather create it yourself,
//  because plugins are gonna take memory, memory for many users means more cost

// this course gives you all tricks made in Elzero with jQuery, then he'll or he created a pure JS practical course
// do practice these funcs in 🍦JS, to maintain powerful skills, Osama Said

// in webDesignTutorials in elzero Channel you can see fontAwesome 17th Episode

// why do we make anchor links in same page, because some websites make links dynamic
//   so they're inside another page or nested pages. and they use looking[I assume it'll be forEach looping as for arrays]
// and using #about or so, is as preventDefault in JS

$(function () { 
  'use strict';
  // Scrolling Sections Smoothly
  $('.navbar li a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top + 2// this 2px is extremely important[with his it was only 1]
      //$(this).data('scroll') means data-scroll
    }, 1000);
  });
});
// 3rd lesson calculating body padding, we wanna make navbar fixed
// if we make it fixed, it'll override following sections,
//  normally we can add padding-top to next element to amend the issue
// but if we change navbar padding, it'll wrap following Els again[static approach]bad in programming
$(()=>{
  // calculating body padding top depending on navbar height| we cam type - or + beside innerHeight()
  $('body').css('paddingTop',$('.navbar').innerHeight())//before last  + 10)
  // we can use same line in  $(window).resize() here
})

// 4th lesson adding and removing active classes, with all methods
$(()=>{
  //adding active to clicked li, and removing it from other siblings
  $('.navbar li a').click(function() {
    $('.navbar a').removeClass('active');//any link under navbar
    $(this).addClass('active');//he said (O) isn't important yet [efficiency]
    // $(this).addClass('active').parent().siblings().find('a').removeClass('active');// even if Osama prefers this but see upwards
  });
});

// 5th lesson sync links with Sections part 1
// when we scroll to non-active section, navbar doesn't change, so we amend it!
$(function () { 
  // sync navbar links with sections
  $(window).scroll(function(){
    $('.block').each(function (inA, elVal) { 
      if($(window).scrollTop() > $(this).offset().top){
        //6th lesson sync part 2
        let blockID = $(this).attr("id");
        $('.navbar li a').removeClass('active');
        if (! $('.navbar a').hasClass('active')){//he said this if saves around 0.1 second[not sure if as wanted]
          $('.navbar li a[data-scroll="'+blockID+'"]').addClass('active');  
        }
        // the second problem is that when we click scrollTop doesn't access its div, we only need to add 1 pixel to it
      }
    });
  });
})

// 7th lesson scroll TO Top Button Part 1
// we have to append every scrolling event in same window scroll,
//  but I separate them for learning purposes
$(function () {
  let scrollToTop = $('.scroll-to-top');
  $(window).scroll(function () {
    // scroll to top button
    if ($(window).scrollTop() >=1000 ){
      if(scrollToTop.is(':hidden')){//for stopping checking after 1k
        scrollToTop.fadeIn();//.css('display', 'inline-block') if tended as for some bugs
        //this stops checking💚🔴, No Need To else
      }
    } else {
      scrollToTop.fadeOut();//I prefer show,hide
    }
  });
  // clicking on button to go upwardly
  scrollToTop.click(function (e) {
    e.preventDefault();// because of not having, the entire function was useless
    $('html, body').animate({
      scrollTop:0},1000)
  });
});

// 10th lesson Popup Part 2
$(()=>{
  $('.show-popup').click(function () {
    $('.' + $(this).data('popup')).fadeIn();//this little change is in 11th lesson
    // to remove '.' + concatenation, we go to HTML and add . for each data-popup
  });
  $('.popup').click(function () {
    $(this).fadeOut();//because its dimension is FULLSCREEN,
    //  when we click anywhere it'll disappear, so we need to make .inner prevented
  });
  $('.popup .inner').click(function (e) {
    e.stopPropagation();//this stops propaganda, meaning:
    // it'll prevent .inner from disappearing when clicked on
  });
  $('.popup .close').click(function (e) {
    e.preventDefault()
    $(this).parentsUntil('.popup').parent().fadeOut();//see if he'll do same, he did in 11th
    //in 114 in his code
    // he'll use a func when [Esc] ket stroke clicked, to exit popup
    // which is called UI, as esc for escaping, ctrl+A for selecting all
    
    // I found that there're [keyCodes] in jQuery, and JS
    // I love this website, for picking 'em when clicked, as 🍦JS
    // 🔴💚 https://www.toptal.com/developers/keycode 💚🔴
  });
});

// button might be in a form, if we work via asp.net, chief point
// and [retarded متخلفة] techs, that might put all HTML in a form, making any button wreck the entire page
// that's why we have to preventDefault in buttons as prior one
// 🔴important🔴

// 11th popup Part 3
// we might have many popups in a website, and there're types as popover[for appearing info of products]
// you can see examples in bootstrap website, it has many lovely jQuery plugins
// especially before launching bootstrap5

// Esc keyCode
$(()=>{
  $(document).keydown(function (e) { 
    if (e.keyCode == 27){// 27 is escape key, as we saw
      $('.popup').fadeOut();// it doesn't work when
      //  having many popups appearing together
    }
  });
});

// 12 lesson buttons with effects part 1
$(()=>{
  $(".from-left").hover(function () {
    $(this).find('span').eq(0).animate({
      width: '100%',
    }, 300);
  }, function () {
    // this is when hover is gone
    $(this).find('span').eq(0).animate({
      width: 0,
    }, 300);
  });
});