const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel-item');
const carouselItemList = document.querySelectorAll('.carousel-item');
const btnList = document.querySelectorAll('.button-download button');
carousel.style.scrollBehavior = 'smooth';

let timerId = 0;
let start_pagex = 0;
let prevScrollLeft = 0;
let rangeX = 0;
let imgWidth =  carouselItem.clientWidth;

function startDrag(e) {
    e.stopPropagation();
    clearInterval(timerId);
    carousel.style.scrollBehavior = 'unset';
    rangeX = (e.pageX ?? e.touches[0].pageX)  - start_pagex;
    carousel.scrollLeft =  prevScrollLeft - rangeX;
}

function stopDrag(e) {
    e.stopPropagation();
    window.removeEventListener('mousemove', startDrag);
    carousel.style.scrollBehavior = 'smooth';
    autoSlide();
    slideAutomatic();
}

function autoSlide() {
    rangeX = Math.abs(rangeX);
    imgWidth =  carouselItem.clientWidth;
    let valDifference = imgWidth - rangeX;

    if(carousel.scrollLeft > (carousel.scrollWidth - carousel.clientWidth-1)) return;
    if(carousel.scrollLeft === 0) return; 
    if(carousel.scrollLeft > prevScrollLeft) return carousel.scrollLeft += rangeX > imgWidth / 3 ? valDifference : -rangeX;
    return carousel.scrollLeft -= rangeX > imgWidth / 3 ? valDifference : -rangeX;
}


function slideAutomatic() {
    timerId = setInterval(() => {
        carousel.scrollLeft += imgWidth;
        if(carousel.scrollLeft > (carousel.scrollWidth - carousel.clientWidth-1)) carousel.scrollLeft = 0; 
    }, 5000);
}

carousel.addEventListener('mousedown', function(e) {
    e.stopPropagation();
    clearInterval(timerId);
    start_pagex = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
    window.addEventListener('mousemove', startDrag);
    window.addEventListener('mouseup', stopDrag);
})


carousel.addEventListener('touchstart', function(e) {
    e.stopPropagation();
    clearInterval(timerId);
    start_pagex = e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
    window.addEventListener('touchmove', startDrag);
    window.addEventListener('touchend', stopDrag);
})

function toggleAnimation(element) {
    var rect = element.getClientRects()[0];
    if((rect.left >= -imgWidth/2 && rect.left <= imgWidth/2)) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

carousel.addEventListener('scroll', function(e) {
    imgWidth =  carouselItem.clientWidth;
    carouselItemList.forEach((elem) => {
        toggleAnimation(elem);
    })
})

window.addEventListener('resize', function() {
    imgWidth =  carouselItem.clientWidth;
})

slideAutomatic();
toggleAnimation(carouselItemList[0]);

