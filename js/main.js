"use strict";$(document).ready((function(){$(".about-slider").on("init",(function(e,t,o){$("#counter").text("1 /"+t.slideCount)})),$(".about-slider").slick({infinite:!0,autoplay:!0,autoplaySpeed:4500,adaptiveHeight:!0,easing:"easy-in",fade:!0,speed:1e3,slidesToShow:1,appendArrows:$(".about-slider__controls-wrapper"),slidesToScroll:1,prevArrow:"<button type='button' class='intro-slider__slick-prev about-slider__slick-prev'></button>",nextArrow:"<button type='button' class='intro-slider__slick-next about-slider__slick-next'></button>"}),$(".about-slider").on("afterChange",(function(e,t,o){$("#counter").text(o+1+" /"+t.slideCount)}))}));var accordionBtn=document.querySelectorAll(".accordion__item "),accordionContent=document.querySelectorAll(".accordion__content ");accordionBtn.forEach((function(e){e.addEventListener("click",(function(){var t=e,o=t.getAttribute("data-accordion"),s=document.getElementById(o);s.classList.contains("show")?(t.classList.remove("show"),s.classList.remove("show")):(accordionBtn.forEach((function(e){e.classList.remove("show")})),accordionContent.forEach((function(e){e.classList.remove("show")})),t.classList.add("show"),s.classList.add("show"))}))})),$(document).ready((function(){var e=!0,t="#counts";$(window).on("scroll load resize",(function(){if(!e)return!1;var o=$(window).scrollTop(),s=$(t).offset().top,r=$(window).height(),n=$(document).height(),i=$(t).outerHeight();(o+200>=s||r+o==n||i+s<r)&&($(".production-slider__anim-number").spincrement({thousandSeparator:"",duration:5e3,from:1}),e=!1)}))}));var burgerMenu=document.getElementById("burger-menu"),burgerBtn=document.getElementById("burger-btn"),open=!1;burgerBtn.addEventListener("click",(function(){open?(burgerMenu.classList.remove("show"),burgerBtn.classList.remove("show"),body.classList.remove("no-scroll"),header.classList.remove("inversed"),open=!1):(burgerMenu.classList.add("show"),burgerBtn.classList.add("show"),body.classList.add("no-scroll"),header.classList.add("inversed"),open=!0)}));var header=document.querySelector(".header"),prevScroll=window.scrollY;window.addEventListener("scroll",(function(){scroll=window.scrollY,scroll>0?header.classList.add("fixed"):header.classList.remove("fixed"),prevScroll=scroll})),$(document).ready((function(){$(".intro-slider").slick({infinite:!0,dots:!0,autoplay:!0,autoplaySpeed:4500,easing:"easy-in-out",cssEase:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",speed:1e3,slidesToShow:1,slidesToScroll:1,appendArrows:$(".intro__controls"),appendDots:$(".intro__controls"),draggable:!1,prevArrow:"<button type='button' class='intro-slider__slick-prev'></button>",nextArrow:"<button type='button' class='intro-slider__slick-next'></button>"})}));var videoBtn=document.querySelector(".intro__btn-video"),closeBtn=document.querySelector(".intro-modal__close-btn"),modalOverlay=document.querySelector(".intro-modal__overlay"),body=document.getElementById("body"),videoPlayer=document.querySelectorAll(".iframe");videoBtn.addEventListener("click",(function(e){modalOverlay.classList.add("modal-overlay--visible"),body.classList.add("no-scroll")})),closeBtn.addEventListener("click",(function(e){modalOverlay.classList.remove("modal-overlay--visible"),body.classList.remove("no-scroll")})),modalOverlay.addEventListener("click",(function(e){e.target==modalOverlay&&(modalOverlay.classList.remove("modal-overlay--visible"),body.classList.remove("no-scroll"))})),$(document).ready((function(){$(".production-slider__inner").slick({slidesToShow:3,slidesToScroll:1,arrows:!0,infinite:!1,vertical:!0,adaptiveHeight:!0,verticalSwiping:!0,cssEase:"ease-out",prevArrow:"<button type='button' class='production-slider__slick-prev'></button>",nextArrow:"<button type='button' class='production-slider__slick-next'></button>",appendArrows:$(".production-slider__arrows")})}));var scrollLink=document.querySelectorAll("[data-scroll]");scrollLink.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-scroll"),o=document.getElementById(t);burgerMenu.classList.contains("show")&&(burgerMenu.classList.remove("show"),burgerBtn.classList.remove("show"),body.classList.remove("no-scroll"),open=!1),o.scrollIntoView({behavior:"smooth",block:"start"})}))})),$(document).ready((function(){$(".services-slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,dots:!0,infinite:!1,appendDots:$(".services-slider__dots"),asNavFor:".services__mobile-slider",prevArrow:"<button type='button' class='services-slider__slick-prev'></button>",nextArrow:"<button type='button' class='services-slider__slick-next'></button>"}),$(".services__mobile-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".services-slider"})}));var tabsBtn=document.querySelectorAll(".tabs__nav-btn"),tabsItems=document.querySelectorAll(".tabs__item");tabsBtn.forEach((function(e){e.addEventListener("click",(function(){var t=e,o=t.getAttribute("data-tab"),s=document.getElementById(o);t.classList.contains("active")||(tabsBtn.forEach((function(e){e.classList.remove("active")})),tabsItems.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),s.classList.add("active"))}))})),$(document).ready((function(){$(".technologies__slider").slick({infinite:!1,easing:"ease-in",speed:1e3,slidesToShow:4,variableWidth:!0,slidesToScroll:1,swipeToSlide:!0,appendArrows:$(".technologies-slider__controls"),prevArrow:"<button type='button' class='intro-slider__slick-prev technologies-slider__slick-prev'></button>",nextArrow:"<button type='button' class='intro-slider__slick-next technologies-slider__slick-next'></button>"})})),$((function(){$(".intro-modal__close-btn").click((function(){$(".intro-modal__video").attr("src",$("iframe").attr("src"))}))})),$((function(){$(".intro-modal__overlay").click((function(){$(".intro-modal__video").attr("src",$("iframe").attr("src"))}))}));