$(document).ready(function(){$(".main-input").on("blur",function(){""!==$(this).val()?$(this).parent().parent().find(".empty").fadeOut():$(this).parent().parent().find(".empty").fadeIn()}),$(".header .overlay .nav-head i.fa.fa-bars").on("click",function(){$(".header .menue").toggleClass("hidden")}),$(".header .menue .logg i.fa-times").on("click",function(){$(".menue").toggleClass("hidden")}),$(".footer .usd button").on("click",function(){$(".all-forms .input-groups input.main-input").focus(),""!==$(".all-forms .input-groups input.main-input").val()?$(".loagin").toggleClass("show"):$(this).find(".empty").fadeIn()}),$(".loagin .social button.cancel").on("click",function(){$(".loagin").toggleClass("show")}),$(".loagin .popup-box span").on("click",function(){$(".loagin .popup-box").toggleClass("show")}),$(".loagin .social button.fbook").on("click",function(){$(".loagin .popup-box").toggleClass("show")}),$(".main-content .row .box").on("click",function(){$(this).toggleClass("activee").parent().siblings().children().removeClass("activee"),$(".footer .usd span.cust").removeClass("hidden"),$(".footer .usd span.eight").addClass("hidden"),$(".footer .usd span.thirt").addClass("hidden")}),$(".main-content .row .box.bef-last").on("click",function(){$(".footer .usd span.cust").addClass("hidden"),$(".footer .usd span.eight").removeClass("hidden"),$(".footer .usd span.thirt").addClass("hidden")}),$(".main-content .row .box.last").on("click",function(){$(".footer .usd span.cust").addClass("hidden"),$(".footer .usd span.eight").addClass("hidden"),$(".footer .usd span.thirt").removeClass("hidden")});var n=$(".footer");$(window).scroll(function(){$(this).scrollTop()<=1200?n.addClass("scrolled"):n.removeClass("scrolled")})});