
$(function ()
 {


    $("#navbar-toggle").blur (function (event) 
    {
     var screenWidth = window.innerWidth;
      if (screenWidth < 768 ) 
      {
    $("#collapsable-nav").collapse('hide');
        }


         }
      );
 }
);


(function (global) { 
   var dc = {};
var homeHtml = "home-snippet.html";
// Convinience function for inserting innerHTML for 'select' 
var insertHtml = function (selector, html) {
var targetElem = document.querySelector(selector); 
targetElem.innerHTML = html;
};
// Show loading icon inside element identified by 'selector'.
 var showLoading = function (selector) {
var html = "<div class='text-center'>";
html += "<img src='wite.gif'></div>";
 insertHtml(selector, html);

 };

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
   // On first load, show home view 
   showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
   homeHtml,
   function (responseText) {
   document.querySelector("#main-content") 
   .innerHTML = responseText;
   },
   true);
   });
   global.$dc = dc;
   })(window);