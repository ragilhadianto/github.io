// modal
MicroModal.init({
  openTrigger: "data-micromodal-trigger",
  disableScroll: true,
  awaitCloseAnimation: true,
});

// slider home
$(".slider").slick({
  dots: true,
  infinite: false,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  appendDots: ".slider__dots",
});

//slider rekomendasi produk
$(".slider-4col").slick({
  dots: true,
  infinite: false,
  speed: 500,
  arrows: true,
  appendDots: ".slider__dots2--rekomendasi ",
  slidesToShow: 4,
  slidesToScroll: 4,
  appendArrows: ".slider__arrow--rekomendasi",
  prevArrow:
    '<button class="prev-arrow"><img src="images/svg/icon-arrow-prev.svg"></button>',
  nextArrow:
    '<button class="next-arrow"><img src="images/svg/icon-arrow-next.svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

//slider product detail
$(".slider-1col").slick({
  dots: true,
  infinite: false,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: ".slider__dots2--foto",
  appendArrows: ".slider__arrow--foto",
  prevArrow:
    '<button class="prev-arrow"><img src="images/svg/icon-arrow-prev.svg"></button>',
  nextArrow:
    '<button class="next-arrow"><img src="images/svg/icon-arrow-next.svg"></button>',
});

//menu
$("#menu_mobile").on("click", function () {
  if ($(this).attr("data-click-state") == 1) {
    $(this).attr("data-click-state", 0);
    $(this).children().attr("src", "images/svg/icon__menuClose.svg");
    $(".header").addClass("header__open");
    $("body").addClass("overflow-y-hidden");
    console.log("0");
  } else {
    $(this).attr("data-click-state", 1);
    $(this).children().attr("src", "images/svg/icon__menu.svg");
    $(".header").removeClass("header__open");
    $("body").removeClass("overflow-y-hidden");
    $(".toggleSearch").removeClass("show");
    console.log("1");
  }
});

//location
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  closeContact();
}

//detail location
var tabContact__close = document.querySelector("#tabContact__close");

if (tabContact__close != null) {
  tabContact__close.addEventListener("click", function () {
    closeContact();
  });
}

function closeContact(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContact");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabLinkContact");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
}

function openContact(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContact");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabLinkContact");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " active";
}

//search toggle
function toggleSearch(el) {
  document.querySelector(".toggleSearch").classList.toggle("show");
}

//toogle class sub menu
function toggleFunction(el) {
  el.parentElement.querySelector(".toggle").classList.toggle("show");
}
//closeToggleFunction
function closeToggleFunction(el) {
  el.parentElement.parentElement.classList.remove("show");
}

//select dropdown
function dropdownFunction(el) {
  el.parentElement.querySelector(".myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//scrolljump perawatan
$(".scrollDown a").bind("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top,
      },
      600,
      function () {
        location.hash = target;
      }
    );
});

//nav jumpscroll
$(".nav__item a[href*=#], .header__imb a[href*=#]").bind("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top,
      },
      600,
      function () {
        location.hash = target;
      }
    );
  return false;
});
