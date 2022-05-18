
//link deaktivieren in Blogübersicht

// if (window.matchMedia('(max-width: 1025px)').matches)
// {
//    var x = document.getElementById("shopify-section-blog-two").querySelectorAll("a");

//    var i;
//    for (i = 0; i < x.length; i++) {
//      x[i].removeAttribute("href");
//    };
//}

$(function() { // encapsulate your code into a function and pass it to jQuery
    $(".hiddenInput").hide();
    $(".showHideCheck").on("change", function() {
      $this = $(this);
      $input = $this.parent().find(".hiddenInput");
      if($this.is(":checked")) {
          $input.slideDown();
      } else {
          $input.slideUp();
      }
    });
  });