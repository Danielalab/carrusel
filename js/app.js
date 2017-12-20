$(document).ready(loadPage);
var target = 0;
debugger;
var loadPage = function () {

  //Elements
  var $buttons = $(".control");
  var $previousBtn = $(".previous");
  var $nextBtn = $(".next");

  //events
  $buttons.click(changeImage);
  $previousBtn.click(previousImage);
  $nextBtn.click(nextImage);
};

var changeImage = function () {
  target = parseInt($(this).data('target'));
  showImage(target);
};

var previousImage = function (e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 4 : target;
  showImage(target)
};

var nextImage = function (e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 4) ? 0 : target;
  showImage(target);
};

var showImage = function (target) {
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass("active");
  $slide.addClass("active");
};

