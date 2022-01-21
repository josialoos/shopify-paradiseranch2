
//link deaktivieren in Blogübersicht

if (window.matchMedia('(max-width: 1025px)').matches)
{
    var x = document.getElementById("shopify-section-blog-two").querySelectorAll("a");

    var i;
    for (i = 0; i < x.length; i++) {
      x[i].removeAttribute("href");
    };
}