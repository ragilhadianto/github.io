// modal
MicroModal.init({
  openTrigger: "data-micromodal-trigger",
  disableScroll: true,
  awaitCloseAnimation: true,
});

// slider home
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: false,
  autoplaySpeed: 2000,
  appendDots: ".slider__dots",
  //appendArrows: ".slider__arrow",
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
  arrows: false,
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
function openCity(evt, cityName, maps) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

    if (screen.width >= 768) {
      var offsetHeight = (tabcontent[
        i
      ].parentElement.parentElement.parentElement.style.height = "auto");
      console.log(offsetHeight);
      console.log("desktop openCity");
    } else {
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";

  mapsitem = document.getElementsByClassName("maps");
  for (i = 0; i < mapsitem.length; i++) {
    mapsitem[i].className = mapsitem[i].className.replace("maps__active", "");
  }
  document.getElementById(maps).classList.add("maps__active");
  evt.currentTarget.className += " active";
  closeContact();
}

//detail location
var tabContact__close = document.querySelectorAll(".tabContact__close");

if (tabContact__close != null) {
  tabContact__close.forEach((img) => {
    img.addEventListener("click", () => {
      closeContact();
    });
  });
}

function closeContact(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContact");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    if (screen.width >= 768) {
      var offsetHeight = (tabcontent[
        i
      ].parentElement.parentElement.parentElement.parentElement.style.height =
        "auto");
      console.log("desktop closeContact");
    } else {
    }
  }
  tablinks = document.getElementsByClassName("tabLinkContact");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.querySelector(".maps").style.right = "-100%";
  // tabContact__close.classList.remove("block");
  // tabContact__close.classList.add("hidden");
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

  if (screen.width >= 768) {
    var offsetHeight = document.getElementById(cityName).offsetHeight;
    document.getElementById(
      cityName
    ).parentElement.parentElement.parentElement.parentElement.style.height =
      offsetHeight + "px";
    console.log("desktop opencontact");
  } else {
  }
  // console.log(offsetHeight);
  // console.log(tablinks);
  //openJump();
}

//search toggle
function toggleSearch(el) {
  document.querySelector(".toggleSearch").classList.toggle("show");
}

//toogle class sub menu
function toggleFunction(el) {
  el.parentElement.querySelector(".toggle").classList.toggle("show");
  el.parentElement.parentElement.classList.add("static");
}

//toogle class nav__jump a
function openJump(evt, jumpName) {
  var i, link;
  link = document.querySelectorAll(".nav__jump a");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" active", "");
  }
  //document.getElementById(jumpName).style.display = "block";
  evt.currentTarget.className += " active";
}

//closeToggleFunction
function closeToggleFunction(el) {
  el.parentElement.parentElement.classList.remove("show");
  el.parentElement.parentElement.parentElement.parentElement.classList.remove(
    "static"
  );
}

//select dropdown
function dropdownFunction(el) {
  el.parentElement.querySelector(".myDropdown").classList.toggle("show");
}

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
$(".nav__item a[href*=#], .nav__jump a[href*=#]").bind("click", function (e) {
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

//nav lokasi mobile
$(".jumpclick a[href*=#]").bind("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");

  if (screen.width <= 768) {
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
  } else {
  }
});

// tabContact__close.classList.remove("hidden");
// tabContact__close.classList.add("block");

// if (clickState == 0) {
//   // code snippet 1
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabContact");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tabLinkContact");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "grid";
//   evt.currentTarget.className += " active";
//   tabContact__close.classList.remove("hidden");
//   tabContact__close.classList.add("block");
//   clickState = 1;
// } else {
//   // code snippet 2
//   closeContact();
//   clickState = 0;
// }

///hover menu

// $(".header__menu ul li .header__menu__sub").hover(function (event) {
//   var target = $(event.target);
//   console.log(target);

//   if ($(target).length) {
//     $(".backdrop").addClass("show");
//     console.log("asdasd");
//   } else {
//     $(".backdrop").removeClass("show");
//   }
// });

$(".header__menu ul li")
  .mouseenter(function (event) {
    if ($(this).has(".header__menu__sub").length) {
      $(".backdrop").addClass("show");
    } else {
      $(".backdrop").removeClass("show");
      //do something
    }
  })
  .mouseleave(function (event) {
    $(".backdrop").removeClass("show");
  });
