var swiper = new Swiper('.swiper-container', {
    slidesPerColumn: 2,
    centerSlides: true,
    centerSlidesBounds: true,
    breakpoints: {
        1440: {
            slidesPerView: 6,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
                hiddenClass: ''
            }
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 5,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
    }
});

swiper.allowTouchMove = false;

const slide = document.querySelectorAll('.swiper-slide'),
    italyMenu = document.getElementById('italy'),
    greeceMenu = document.getElementById('greece'),
    germanyMenu = document.getElementById('germany'),
    turkeyMenu = document.getElementById('turkey'),
    spainMenu = document.getElementById('spain'),
    portugalMenu = document.getElementById('portugal'),
    all = document.getElementById('all'),
    country = document.querySelectorAll('.menu__list-item'),

    wrapper = document.querySelector('.swiper-wrapper'),
    next = document.querySelector('.swiper-btn-next'),
    prev = document.querySelector('.swiper-btn-prev'),

    phoneArrow = document.querySelector('.menu__phone-arrow'),
    phoneArrowActive = document.querySelector('.menu__phone-arrow-active'),
    menuList = document.querySelector('.menu__list'),
    activeItems = document.querySelector('.menu__phone-active-item');

let wrapperStr;
//функция для определения первого активного слайда  
function createCount() {
    let widthStr = slide[0].style.width;
    let widthNum = Number(widthStr.slice(0, widthStr.length - 2));

    return Math.floor((Math.abs(swiper.translate) / widthNum) * 2)
}
//функция для добавления добавления первому слайду нужного класса
function responseOnSwipe(variable) {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('swiper-slider--active');
    }
    slide[variable].classList.add('swiper-slider--active');
}
//функция для создания нужной структуры классов на десктопе
function createAttribute() {
    for (let i = 0; i < slide.length; i++) {
        if (i === 8 || i === 9 || i === 10 || i === 11) {
            slide[i].classList.add('swiper-slide-show-left');
        }
    }
}
//функция для динамического изменения структуры классов на десктопе
function addedClassShowLeft() {
    let arr = createArrayVisibiliti();
    for (let j = 0; j < arr.length; j++) {
        if (j === 8 || j === 9 || j === 10 || j === 11) {
            arr[j].classList.add('swiper-slide-show-left');
        }
    }
}
//функция для создания нужной структуры классов на телефоне
function createAttributePhone() {
    slide[0].classList.add('swiper-slide--show-left');
    slide[1].classList.add('swiper-slide--show-left');
    slide[2].classList.add('swiper-slide--show-right');
    slide[3].classList.add('swiper-slide--show-right');
}
//функция для создания нужной структуры классов на планшете
function createAttributeTablet() {
    for (let i = 0; i < slide.length; i++) {

    }
}

window.onload = function () {
    if (window.innerWidth >= 1440) {
        createAttribute();
        slide[0].classList.add('swiper-slider--active');
        swiper.on('slideNextTransitionStart', function () {
            let countPhone = createCount();
            responseOnSwipe(countPhone);
        })

        swiper.on('slidePrevTransitionStart', function () {
            let countPhone = createCount();
            responseOnSwipe(countPhone);
        })
    } else if (window.innerWidth <= 767) {
        createAttributePhone();
        swiper.on('slideNextTransitionStart', function () {
            let countPhone = createCount();
            responseOnSwipe(countPhone);
        })

        swiper.on('slidePrevTransitionStart', function () {
            let countPhone = createCount();
            responseOnSwipe(countPhone);
        })
    } else if (window.innerWidth < 1440 && window.innerWidth > 767) {
        //createAttribute();
        slide[0].classList.add('swiper-slider--active');

        swiper.on('slideNextTransitionStart', function () {
            let countTablet = createCount();
            responseOnSwipe(countTablet);
        })
        swiper.on('slidePrevTransitionStart', function () {
            let countTablet = createCount();
            responseOnSwipe(countTablet);
        })
    } else if (window.innerWidth <= 767){

    }
}
//функция для определения необходимости видимости стрелок слайдера 
function createArrayVisibiliti() {
    let arr = [];
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('swiper-slide-show-left');
        if (slide[i].classList.contains('no-active') === false) {
            arr.push(slide[i]);
        }
    }
    return arr;
}
//функция добавление/удаления кнопок навигации слайдера 
function checkButton() {
    let arr = createArrayVisibiliti();

    if (arr.length < 12) {
        next.classList.add('swiper-button-disabled');
        prev.classList.add('swiper-button-disabled');
    } else {
        next.classList.remove('swiper-button-disabled');
    }
}

//main function
function showCard(item) {
    for (let i = 0; i < slide.length; i++) {
        if (item.getAttribute('id') !== slide[i].getAttribute('country')) {
            slide[i].classList.add('no-active');
        } else slide[i].classList.remove('no-active');
    }
}
// функция считает необходимую ширину для swiper-wrapper из учета количества активных слайдов
function parser() {
    let count = 0,
        rezult = 0,
        widthStr = slide[0].style.width;
    for (let i = 0; i < slide.length; i++) {
        if (slide[i].classList.contains('no-active') === false) {
            count += 1;
        }
    }

    widthNum = Number(widthStr.slice(0, widthStr.length - 2));
    rezult = Math.ceil(count / 2) * widthNum;
    return rezult + 'px';
}

prev.onclick = function () {
    for (let i = 0; i < slide.length; i++) {
        let labelOne = slide[i - 2],
            labelTwo = slide[i - 1],
            labelOneDel = slide[i + 2],
            labelTwoDel = slide[i + 3];
        if (slide[i].classList.contains('swiper-slide-show-left') === true) {
            labelOneDel.classList.remove('swiper-slide-show-left');
            labelOne.classList.add('swiper-slide-show-left');
            labelTwoDel.classList.remove('swiper-slide-show-left');
            labelTwo.classList.add('swiper-slide-show-left');
            break;
        }
    }
}

next.onclick = function () {
    for (let i = 0; i < slide.length; i++) {
        let label = slide[i],
            labelCount = slide[i + 4],
            labelTwo = slide[i + 1],
            labelTwoCount = slide[i + 5];
        if (slide[i].classList.contains('swiper-slide-show-left') === true) {
            label.classList.remove('swiper-slide-show-left');
            labelCount.classList.add('swiper-slide-show-left');
            labelTwo.classList.remove('swiper-slide-show-left');
            labelTwoCount.classList.add('swiper-slide-show-left');
            break;
        }
    }
}
// main loop
for (let i = 0; i < country.length; i++) {
    country[i].onclick = function () {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
        if (country[i].getAttribute('id') === 'all'){
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('no-active');
            }
            checkButton();
            addedClassShowLeft();
        } else {
            country[i].classList.add('show');
            showCard(country[i]);
            checkButton();
            wrapper.style.width = parser();
            swiper.setTranslate (0);
            addedClassShowLeft();
        }
    }
}

//phone version

phoneArrow.onclick = function () {
    menuList.classList.toggle('show');
    phoneArrow.classList.toggle('show');

    for (let i = 0; i < country.length; i++) {
        country[i].classList.toggle('phone-show');
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('swiper-slide--mobile-active')
    }
}


for (let i = 0; i < slide.length; i++) {
    slide[i].onclick = function () {
        slide[i].classList.add('swiper-slide--mobile-active');
        if (slide[i].classList.contains('swiper-slide--show-right') === true) {
            swiper.slideNext();
        }
    }
}