// function colorChange() {
//   let icon = document.getElementsByClassName("fab fa-html5");
//   console.log(icon);
//   icon.style.backgroundColor = "#c5247e";
// }
// icon.addEventListener("click", function ()) {
//     document.getElementsByClassName
// };
// event.target.style.color = "#c5247e"

// icon.addEventListener.target.style.color = "#c5247e"

// let icon=document.getElementsByClassName("far");

// $("button#jQueryColorChange" ).click(function() {
//     $(this).toggleClass( "selected" );
// });=""

// let htmlAndCss = document.query(".fab fa-html5");

// btnhtmlAndCss.addEvenListerner(
//   "click",
//   () => (btnhtmlAndCss.backgroundcolor = "#ffffff")
// );

$(".tab-content > .tab-pane").hide();
$(".tab-content > .tab-pane:first-of-type").show();

$(".tabs a").click(function (e) {
  e.preventDefault();
  var $this = $(this),
    tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
    others = $this.closest("li").siblings().children("a"),
    target = $this.attr("href");
  others.removeClass("active");
  $this.addClass("active");
  $(tabgroup).children(".tab-pane").hide();
  $(target).fadeIn().show;

  // Tabs height
  var tab_height = $(".tab-content > .tab-pane")
    .filter($(this).attr("href"))
    .height();
  $(".tab-content").animate(
    {
      height: tab_height,
    },
    function () {
      $(".tab-content").css("height", "auto");
    }
  );
});
