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
    country = document.querySelectorAll('.menu__list-item'),

    wrapper = document.querySelector('.swiper-wrapper'),
    next = document.querySelector('.swiper-btn-next'),
    prev = document.querySelector('.swiper-btn-prev'),

    phoneArrow = document.querySelector('.menu__phone-arrow'),
    phoneArrowActive = document.querySelector('.menu__phone-arrow-active'),
    menuList = document.querySelector('.menu__list'),
    activeItems = document.querySelector('.menu__phone-active-item');

let wrapperStr;

function createCount() {
    let widthStr = slide[0].style.width;
    let widthNum = Number(widthStr.slice(0, widthStr.length - 2));

    return Math.floor((Math.abs(swiper.translate) / widthNum) * 2)
}

function responseOnSwipe(variable) {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('swiper-slider--active');
    }
    slide[variable].classList.add('swiper-slider--active');
}

function createAttribute() {
    for (let i = 0; i < slide.length; i++) {
        let styleStr = slide[i].getAttribute('style');
        let newStyleStr = styleStr + ' display: flex;';
        slide[i].setAttribute('style', newStyleStr);
        if (i === 8 || i === 9 || i === 10 || i === 11) {
            slide[i].classList.add('swiper-slide-show-left');
        }
    }
}

function createAttributePhone() {
    for (let i = 0; i < slide.length; i++) {
        let styleStr = slide[i].getAttribute('style');
        let newStyleStr = styleStr + ' display: flex;';
        slide[i].setAttribute('style', newStyleStr);
    }
    slide[0].classList.add('swiper-slide--show-left');
    slide[1].classList.add('swiper-slide--show-left');
    slide[2].classList.add('swiper-slide--show-right');
    slide[3].classList.add('swiper-slide--show-right');
}

function createAttributeTablet() {
    for (let i = 0; i < slide.length; i++) {
        let styleStr = slide[i].getAttribute('style');
        let newStyleStr = styleStr + ' display: flex;';
        slide[i].setAttribute('style', newStyleStr);
    }
}

window.onload = function () {
    if (window.innerWidth >= 1440) {
        createAttribute();
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
        createAttribute();
        slide[0].classList.add('swiper-slider--active');

        swiper.on('slideNextTransitionStart', function () {
            let countTablet = createCount();
            responseOnSwipe(countTablet);
        })
        swiper.on('slidePrevTransitionStart', function () {
            let countTablet = createCount();
            responseOnSwipe(countTablet);
        })
    }
}

function createArrayVisibiliti() {
    let arr = [];
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('swiper-slide-show-left');
        if (slide[i].getAttribute('style').indexOf('display: none') === -1) {
            arr.push(slide[i]);
        }
    }
    return arr;
}

function addedClassShowLeft() {
    let arr = createArrayVisibiliti();
    for (let j = 0; j < arr.length; j++) {
        if (j === 8 || j === 9 || j === 10 || j === 11) {
            arr[j].classList.add('swiper-slide-show-left');
        }
    }
}

function checkButton() {
    let arr = createArrayVisibiliti();

    if (arr.length < 12) {
        next.classList.add('swiper-button-disabled');
        prev.classList.add('swiper-button-disabled');
    } else {
        next.classList.remove('swiper-button-disabled');
    }
}

function parser() {
    let count = 0,
        rezult = 0,
        widthStr = slide[0].style.width;
    for (let i = 0; i < slide.length; i++) {
        if (slide[i].getAttribute('style').indexOf('display: none') === -1) {
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

all.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }

    all.classList.add('show');
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'flex';
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'flex';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'flex';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'flex';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'flex';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'flex';
    }
    checkButton();

    wrapper.style.width = parser();

    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);

    addedClassShowLeft();
}

italyMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }
    italyMenu.classList.add('show');
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'flex';
        italy[i].classList.remove("show");
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'none';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'none';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'none';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'none';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

germanyMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }

    germanyMenu.classList.add('show');
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'flex';
    }
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'none';
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'none';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'none';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'none';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

greeceMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }

    greeceMenu.classList.add('show');
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'flex';
    }
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'none';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'none';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'none';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'none';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

turkeyMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }

    turkeyMenu.classList.add('show');
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'flex';
    }
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'none';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'none';
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'none';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'none';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

spainMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }
    spainMenu.classList.add('show');
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'flex';
    }
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'none';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'none';
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'none';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'none';
    }
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

portugalMenu.onclick = function () {
    if (window.innerWidth >= 1440) {
        for (let i = 0; i < country.length; i++) {
            country[i].classList.remove('show');
        }
    }

    portugalMenu.classList.add('show');
    for (let i = 0; i < portugal.length; i++) {
        portugal[i].style.display = 'flex';
    }
    for (let i = 0; i < italy.length; i++) {
        italy[i].style.display = 'none';
    }
    for (let i = 0; i < germany.length; i++) {
        germany[i].style.display = 'none';
    }
    for (let i = 0; i < greece.length; i++) {
        greece[i].style.display = 'none';
    }
    for (let i = 0; i < turkey.length; i++) {
        turkey[i].style.display = 'none';
    }
    for (let i = 0; i < spain.length; i++) {
        spain[i].style.display = 'none';
    }
    checkButton();
    wrapper.style.width = parser();
    wrapperStr = 'width: ' + parser() + ';';
    wrapper.setAttribute('style', wrapperStr);
    addedClassShowLeft();
}

//Поехали пилить под мобильнички

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
        //console.log(slide[i].classList.contains('swiper-slide--show-right'))
        if (slide[i].classList.contains('swiper-slide--show-right') === true) {
            swiper.slideNext();
        }
    }
}
/*
swiper.on('slideNextTransitionStart', function () {

    createAttributePhoneLeftRight(countPhone);
    countPhone += 2;
    eventCreate();
})

swiper.on('slidePrevTransitionStart', function () {

    createAttributePhoneLeftRight(countPhone);
    countPhone -= 2;
    eventCreate();
})*/