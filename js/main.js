$('.services__slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplay: 6000,
    cssEase: 'ease-in-out',
    nextArrow: '<button class="services__slick-nextarrow"><img src="img/services/arrowRight.svg" alt=""></button>',
    prevArrow: '<button class="services__slick-prevarrow"><img src="img/services/arrowLeft.svg" alt=""></button>',
})


// WORKS CATEGORIES SELECT
const filterBox = document.querySelectorAll('.box');


$('.works__list-categorie').click(function(event) {  
    $(this).siblings().removeClass('actives');
    $(this).addClass('actives');

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach((elem) => {
        elem.classList.remove('none');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('none');
        }
    });
});

