var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    slidesPerColumn: 2,
    spaceBetween: 15,
    //slidesOffsetAfter: 30,
    centerSlides: true,
    centerSlidesBounds: true,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
        hiddenClass: ''
    },
});

const slide = document.querySelectorAll('.swiper-slide'),
    italy = document.querySelectorAll('.italy'),
    italyMenu = document.getElementById('italy'),
    greece = document.querySelectorAll('.greece'),
    greeceMenu = document.getElementById('greece'),
    germany = document.querySelectorAll('.germany'),
    germanyMenu = document.getElementById('germany'),
    turkey = document.querySelectorAll('.turkey'),
    turkeyMenu = document.getElementById('turkey'),
    spain = document.querySelectorAll('.spain'),
    spainMenu = document.getElementById('spain'),
    portugal = document.querySelectorAll('.portugal'),
    portugalMenu = document.getElementById('portugal'),
    all = document.getElementById('all'),

    wrapper = document.querySelector('.swiper-wrapper');


function parser() {
    let count = 0,
        rezult =0;
    for (let i=0; i < slide.length; i++) {
        if (slide[i].getAttribute('style').indexOf('none') === -1) {
            count += 1;
        }
    }
    rezult = Math.ceil(count/2) * 201;
    return rezult+'px';
}

all.onclick = function() {
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'flex';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'flex';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'flex';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'flex';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'flex';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'flex';
    }
}

italyMenu.onclick = function() {
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'flex';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'none';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'none';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'none';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'none';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'none';
    }
    wrapper.style.width = parser();
}

germanyMenu.onclick = function() {
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'flex';
    }
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'none';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'none';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'none';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'none';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'none';
    }
    wrapper.style.width = parser();
} 

greeceMenu.onclick = function() {
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'flex';
    }
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'none';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'none';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'none';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'none';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'none';
    }
    wrapper.style.width = parser();
} 

turkeyMenu.onclick = function() {
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'flex';
    }
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'none';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'none';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'none';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'none';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'none';
    }
    wrapper.style.width = parser();
}

spainMenu.onclick = function() {
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'flex';
    }
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'none';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'none';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'none';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'none';
    }
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'none';
    }
    wrapper.style.width = parser();
} 

portugalMenu.onclick = function() {
    for (let i=0; i < portugal.length; i++){
        portugal[i].style.display = 'flex';
    }
    for (let i=0; i < italy.length; i++){
        italy[i].style.display = 'none';
    }
    for (let i=0; i < germany.length; i++){
        germany[i].style.display = 'none';
    }
    for (let i=0; i < greece.length; i++){
        greece[i].style.display = 'none';
    }
    for (let i=0; i < turkey.length; i++){
        turkey[i].style.display = 'none';
    }
    for (let i=0; i < spain.length; i++){
        spain[i].style.display = 'none';
    }
    wrapper.style.width = parser();
}