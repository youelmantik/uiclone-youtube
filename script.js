$(".show-list").on("click", function () {
  if ($(this).hasClass("subscriptions")) {
    $(".subscriptions-menu").toggleClass("more");
    $("#subscriptions").toggleClass("more");
    let text = $(".subscriptions-menu").hasClass("more") ? "Show Less" : "Show More";
    $("#show-subscriptions").text(text);
  } else if ($(this).hasClass("library")) {
    $(".library-menu").toggleClass("more");
    $("#library").toggleClass("more");
    let text = $(".library-menu").hasClass("more") ? "Show Less" : "Show More";
    $("#show-library").text(text);
  }
});
$("#button-for-small").on("click", function () {
  $(".section-menu").toggleClass("hide");
  $(".left-menu").toggleClass("small-menu");
  $(".small").toggleClass("active");
  $(".body").toggleClass("small-menu");
  $(".content").toggleClass("small-menu");
});

$(".menu").on("click", function () {
  $(".menu.active").removeClass("active");
  $(this).addClass("active");
});
$(function () {
  $(".body-tag").mousewheel(function (event, delta) {
    this.scrollLeft -= delta * 20;
    event.preventDefault();
  });
});
