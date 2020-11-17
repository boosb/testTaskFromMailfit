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
//функция для добавления первому слайду нужного класса
function responseOnSwipe() {
    let item = createCount();
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('slide--active');
    }
    if (slide[item].classList.contains('no-active') === false) {
        slide[item].classList.add('slide--active');
        return item;
    } else {
        for (let i=0; i < slide.length; i++) {
            if(slide[i].classList.contains('no-active') === false) {
                slide[i].classList.add('slide--active');
                return i;
            }
        }
    }
}
//функция для создания массива видимых слайдов 
function createArrayVisibiliti() {
    let arr = [];
    for (let i = 0; i < slide.length; i++) {
        if (slide[i].classList.contains('no-active') === false) {
            arr.push(slide[i]);
        }
    }
    return arr;
}
//функция динамического изменения классов на десктопе при прокрутке слайдов
function addedClassShowLeft(elem) {
    let arrayCard = createArrayVisibiliti();
    for (let i = elem; i < elem+12; i++) {
        if (i === elem+8 || i === elem+9 || i === elem+10 || i === elem+11) {   
            arrayCard[i].classList.add('swiper-slide--show-left');
        } else if(arrayCard[i] === undefined) {
            break
        } else {
            arrayCard[i].classList.remove('swiper-slide--show-left');
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
function createAttributeTablet(elem) {
    let arrayCard = createArrayVisibiliti();
    for (let i = elem; i < elem+6; i++) {
        if (arrayCard[i] === undefined) {
            continue
        } else if (i === elem+2 || i === elem+3) {
            arrayCard[i].classList.add('swiper-slide--column-two');
            arrayCard[i].classList.remove('swiper-slide--column-three');
        } else if (i === elem+4 || i === elem+5) {
            arrayCard[i].classList.add('swiper-slide--column-three');
            arrayCard[i].classList.remove('swiper-slide--column-two');
        } else {
            arrayCard[i].classList.remove('swiper-slide--column-three');
            arrayCard[i].classList.remove('swiper-slide--column-two');
        }
    }
}

function cleanClassForTablet() {
    for (let i=0; i<slide.length; i++) {
        slide[i].classList.remove('swiper-slide--mobile-active');
    }
}

window.onload = function () {
    slide[0].classList.add('slide--active');
    if (window.innerWidth >= 1440) {
        addedClassShowLeft(responseOnSwipe());
        swiper.on('slideNextTransitionStart', function () {
            addedClassShowLeft(responseOnSwipe());
        })

        swiper.on('slidePrevTransitionStart', function () {
            addedClassShowLeft(responseOnSwipe());
        })
    } else if (window.innerWidth < 1440 && window.innerWidth > 767) {
        createAttributeTablet(responseOnSwipe());
        for(let i=slide.length-1; i > slide.length-5; i--) {
            slide[i].classList.add('swiper-slide--show-left');
        }
        swiper.on('slideNextTransitionStart', function () {
            createAttributeTablet(responseOnSwipe());
            cleanClassForTablet();
            console.log(swiper.el)
        })
        swiper.on('slidePrevTransitionStart', function () {
            createAttributeTablet(responseOnSwipe());
            cleanClassForTablet();
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
//функция добавление/удаления кнопок навигации слайдера 
function checkButton() {
    let arr = createArrayVisibiliti();
    if (arr.length < 12) {
        next.classList.add('swiper-button-disabled');
        prev.classList.add('swiper-button-disabled');
        /*next.setAttribute('aria-disabled', 'true')
        console.log(next, prev)*/
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
    let arrayCard = createArrayVisibiliti(),
        rezult = 0,
        widthStr = slide[0].style.width;
    widthNum = Number(widthStr.slice(0, widthStr.length - 2));
    rezult = Math.ceil(arrayCard.length / 2) * widthNum;
    return rezult + 'px';
}

// main loop
for (let i = 0; i < country.length; i++) {
    country[i].onclick = function () {
        if (window.innerWidth >= 1440) {
            for (let i = 0; i < country.length; i++) {
                country[i].classList.remove('show');
            }
            country[i].classList.add('show');
            if (country[i].getAttribute('id') === 'all') {
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('no-active');
                }
                addedClassShowLeft(0);
                checkButton();
            } else {
                showCard(country[i]);
                addedClassShowLeft(0);
                checkButton();
            }
            wrapper.style.width = parser();
            swiper.setTranslate(0);
        } else if (window.innerWidth < 1440 && window.innerWidth > 767) {
            if (country[i].getAttribute('id') === 'all') {
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('no-active');
                }
                createAttributeTablet(0);
                
            } else {
                showCard(country[i]);
                createAttributeTablet(0);
            }
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
        cleanClassForTablet();
        slide[i].classList.toggle('swiper-slide--mobile-active');
        if (slide[i].classList.contains('swiper-slide--column-two') === true && slide[i].classList.contains('swiper-slide--show-left') === true) {
            swiper.slidePrev(300, false);
            createAttributeTablet(responseOnSwipe());
        } else if (slide[i].classList.contains('swiper-slide--column-three') === true && slide[i].classList.contains('swiper-slide--show-left') === true) {
            createAttributeTablet(responseOnSwipe());
        } else if (slide[i].classList.contains('swiper-slide--column-two') === true) {
            swiper.slideNext(300, false);
            createAttributeTablet(responseOnSwipe());
        } else if (slide[i].classList.contains('swiper-slide--column-three') === true) {
            swiper.slideNext(300, false);
            swiper.slideNext(300, false);
            createAttributeTablet(responseOnSwipe());
        }

    }
}