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

//swiper.allowTouchMove = false;

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
function responseOnSwipe() {
    let item = createCount();
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('slide--active');
    }
    if (slide[item].classList.contains('no-active') === false) {
        slide[item].classList.add('slide--active');
        console.log(1)
        return item;
    } else {
        for (let i=0; i < slide.length; i++) {
            //slide[i].classList.remove('slide--active');
            if(slide[i].classList.contains('no-active') === false) {
                slide[i].classList.add('slide--active');
                console.log(i)
                return i;
            }
        }
    }
}

//функция динамического изменения классов
function addedClassShowLeft() {
    let item = responseOnSwipe();
    for (let i = item; i < item + 12; i++) {
        if (i === item + 8 || i === item + 9 || i === item + 10 || i === item + 11) {   
            slide[i].classList.add('swiper-slide-show-left');
        } else {
            slide[i].classList.remove('swiper-slide-show-left');
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
    slide[0].classList.add('slide--active');
    if (window.innerWidth >= 1440) {
        addedClassShowLeft();
        swiper.on('slideNextTransitionStart', function () {
            addedClassShowLeft();
        })

        swiper.on('slidePrevTransitionStart', function () {
            addedClassShowLeft();
        })
    } else if (window.innerWidth < 1440 && window.innerWidth > 767) {

        swiper.on('slideNextTransitionStart', function () {
            responseOnSwipe();
        })
        swiper.on('slidePrevTransitionStart', function () {
            responseOnSwipe();
        })
    } else if (window.innerWidth <= 767) {
        createAttributePhone();
        swiper.on('slideNextTransitionStart', function () {
            responseOnSwipe();
        })

        swiper.on('slidePrevTransitionStart', function () {
            responseOnSwipe();
        })
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

// main loop
for (let i = 0; i < country.length; i++) {
    country[i].onclick = function () {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
        if (country[i].getAttribute('id') === 'all') {
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('no-active');
            }
            checkButton(); 
            addedClassShowLeft();
        } else {
            country[i].classList.add('show');
            showCard(country[i]);
            checkButton();
            addedClassShowLeft();
            wrapper.style.width = parser();
            swiper.setTranslate(0);
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