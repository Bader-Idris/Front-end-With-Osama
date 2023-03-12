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
