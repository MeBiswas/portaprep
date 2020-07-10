/*---- Hero Slider ----*/
$(document).ready(function() {
  var owl = $('.slider-active');
  owl.owlCarousel({
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    smartSpeed: 600,
    margin: 0,
    nav: true,
    loop: true,
    dots: false,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
/*---- Course Slider ----*/
$(document).ready(function() {
  var owl = $('.course-slider');
  owl.owlCarousel({
    item: 3,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    smartSpeed: 600,
    margin: 25,
    merge: true,
    nav: true,
    loop: true,
    dots: false,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});
/*---- Testimonial Slider ----*/
$(document).ready(function() {
  var owl = $('.testimonial-slider');
  owl.owlCarousel({
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    smartSpeed: 600,
    margin: 25,
    nav: true,
    loop: true,
    dots: false,
    navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive: {
      300: {
        items: 2,
        nav: false
      },
      480: {
        items: 2,
        nav: false
      },
      768: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2
      }
    }
  });
});