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


document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close');
    const nextBtn = document.querySelector('.next');
    const prevbtn = document.querySelector('.prev');

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            lightboxImage.src = images[index].src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex].src;
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex].src;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            lightbox.style.display = 'none';
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        } else if (event.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });
});

// Open the modal and display the clicked image
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  