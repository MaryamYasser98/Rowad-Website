

let navbar = $(".navbar");
let btn = document.getElementById("backUpBtn");
let nav = document.querySelector('.navbar-collapse');



$(window).scroll(
  // stiky navbar
  function () {
    let Tops = $(".message").offset().top - window.innerHeight;

    if ($(window).scrollTop() > Tops) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }


    nav.classList.remove('show');


    //back up btn
    scrollFunction();

    //active link
    $("section").each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let height = $(this).height();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("show");
        $(".navbar").find(`[href="#${id}"]`).addClass("show");
      }
    }); // end of section funtion
    

    
  } //end of scroll function
);





// back up btn
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};



// swiper header
var swiper = new Swiper(".headerSwiper", {
  slidesPerGroup: 1,
  speed: 1000,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
  },
});


// swiper client
var swiper = new Swiper(".SwiperClient", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// AOS Animation
AOS.init({
  duration: 600,
  offset: 150,
});
