/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
   let darkBoxVisible = false;
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


function showDarkbox(url) {
  
    let darkBoxVisible = false;
    if(!darkBoxVisible) {
     let x = (window.innerWidth - 1280) / 2;
     let y = window.scrollY + 50;    // Create the darkBox
     var div = document.createElement("div");
     div.id = "darkbox";
     div.innerHTML = '<img class="darkboximg" src="'+url+'" />';
     document.body.appendChild(div);
     let box = document.getElementById("darkbox");
     box.style.left = x.toString()+"px";
     box.style.top = y.toString()+"px";
     box.style.height = 'auto';
     box.addEventListener('click', (event) => {
      // Remove it
      let element = document.getElementById("darkbox");
      element.parentNode.removeChild(element);     
      
      darkBoxVisible = false;})    
      darkBoxVisible = true;  
    } else {
     // Remove it
     let element = document.getElementById("darkbox");
     element.parentNode.removeChild(element);    darkBoxVisible = false;
  }
 }

 window.addEventListener('load', (event) => {
    let images = document.querySelectorAll("img");
    if(images !== null && images !== undefined && images.length > 0) {
     images.forEach(function(img) {
      img.addEventListener('click', (evt) => {
       showDarkbox(img.src);
      });
     });
    }
   });