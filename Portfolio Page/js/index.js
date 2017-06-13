var scrollNumber = 100;


$( document ).ready(function() {
  var aboutPage = $("#About").position().top;
  var aboutHeight = $("#About").outerHeight();
  var portfolioPage = $("#Portfolio").position().top;
  var contactPage = $("#Contact").position().top;
     $(window).scroll(function(){
        var currentScreenPosition  = $(document).scrollTop();
        if(currentScreenPosition >=0 && currentScreenPosition < portfolioPage) {
          $(".two").removeClass("active");
          $(".three").removeClass("active");
          $(".one").addClass("active");
        }
       
       if(currentScreenPosition > aboutPage + aboutHeight - scrollNumber && currentScreenPosition < contactPage) {
          $(".two").addClass("active");
          $(".three").removeClass("active");
          $(".one").removeClass("active");
        }
       
       if(currentScreenPosition >= contactPage - scrollNumber) {
          $(".two").removeClass("active");
          $(".three").addClass("active");
          $(".one").removeClass("active");
        }
       
      });
  $(".one").on("click", function() {
    $('html, body').stop().animate({ 
      scrollTop: aboutPage
  }, 500);
  })
  
  $(".two").on("click", function() {
    $('html, body').stop().animate({ 
      scrollTop: portfolioPage
  }, 500);
  })
  
  $(".three").on("click", function() {
    $('html, body').stop().animate({ 
      scrollTop: contactPage
  }, 500);
  })
  
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
     
    }
}