// sabte naaaaaaaam
const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

// imageeeeeeeeee slide
(function () {
  var $slides = document.querySelectorAll(".slide");
  var $controls = document.querySelectorAll(".slider__control");
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;

  [].slice.call($slides).forEach(function ($el, index) {
    var i = index + 1;
    $el.classList.add("slide-" + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function ($el) {
    $el.addEventListener("click", controlClickHandler);
  });

  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var $control = this;
    var isRight = $control.classList.contains("m--right");
    var $curActive = document.querySelector(".slide.s--active");
    var index = +$curActive.dataset.slide;
    isRight ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector(".slide-" + index);

    $control.classList.add("a--rotation");
    $curActive.classList.remove("s--active", "s--active-prev");
    document.querySelector(".slide.s--prev").classList.remove("s--prev");

    $newActive.classList.add("s--active");
    if (!isRight) $newActive.classList.add("s--active-prev");

    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector(".slide-" + prevIndex).classList.add("s--prev");

    setTimeout(function () {
      $control.classList.remove("a--rotation");
      slidingBlocked = false;
    }, slidingAT * 0.75);
  }
})();

// tab111111111111111111111111111111111111111111111111111111111111111
// Acc
$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});
