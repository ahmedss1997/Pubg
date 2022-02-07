

$(document).ready(function () {
  
  // Validation + Effects
  $('.main-input').on('blur', function () {
    if ($(this).val() !== '') {
      $(this).parent().parent().find('.empty').fadeOut(); // Hide Validation Message
    } else {
      $(this).parent().parent().find('.empty').fadeIn(); // Show Validation Message
    }
    
  });
  
  // Show / Hidden Menue Navbar
  
  $(".header .overlay .nav-head i.fa.fa-bars").on("click", function () {
    $(".header .menue").toggleClass('hidden');
  })
  
  $(".header .menue .logg i.fa-times").on("click", function () {
    $(".menue").toggleClass('hidden');
  });
  
  // Show / Hidden Logain Box
  
  $('.footer .usd button').on('click', function () {
    $('.all-forms .input-groups input.main-input').focus();
    if ($('.all-forms .input-groups input.main-input').val() !== '') {
      $('.loagin').toggleClass('show');
    } else {
      $(this).find('.empty').fadeIn();
    }
  })
  
  $('.loagin .social button.cancel').on('click', function () {
    $('.loagin').toggleClass('show');
  })
  
  // Show / Hidden Facebook Box
  
  $(".loagin .popup-box span").on("click", function () {
    $(".loagin .popup-box").toggleClass('show');
  })
  
  $(".loagin .social button.fbook").on("click", function () {
    $(".loagin .popup-box").toggleClass('show');
  })
  
  // Show / Hidden Active Box
  
  $(".main-content .row .box").on("click", function () {
    $(this).toggleClass('activee').parent().siblings().children().removeClass('activee');
    $(".footer .usd span.cust").removeClass('hidden');
    $(".footer .usd span.eight").addClass('hidden');
    $(".footer .usd span.thirt").addClass('hidden');
  })
  
  // Show / Hidden Active Box

  
  $(".main-content .row .box.bef-last").on("click", function () {
    $(".footer .usd span.cust").addClass('hidden');
    $(".footer .usd span.eight").removeClass('hidden');
    $(".footer .usd span.thirt").addClass('hidden');
  })

  $(".main-content .row .box.last").on("click", function () {
    $(".footer .usd span.cust").addClass('hidden');
    $(".footer .usd span.eight").addClass('hidden');
    $(".footer .usd span.thirt").removeClass('hidden');
  })
  
  // Scrolled Footer
  
  var scrollFooter = $(".footer");
  $(window).scroll(function () {
    if ($(this).scrollTop() <= 1200) {
      scrollFooter.addClass('scrolled');
    } else {
      scrollFooter.removeClass('scrolled');
    }
  });
  
  // Loading Screen
  
  // setTimeout(function () {
  //   "use strict";
  //   $('.loading .sk-circle').fadeOut(1000, function () {
  //     $(this).parent().fadeOut(1000, function () {
  //       $("body").css({
  //         overflow: "auto",
  //         overflowX: "hidden",
  //       });
  //
  //       $(this).remove();
  //     });
  //   });
  // }, 500);
  
});


// var myInput = document.getElementById('seend');

// myInput.onclick = function () {
//   window.location.href = "https://www.pubgmobile.com/ar/home.shtml";
// }