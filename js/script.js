const html5Slider = document.getElementById('html5');
const inputNumber = document.getElementById('priceFrom');
const inputNumber2 = document.getElementById('priceTo');
const sidebarWrapper = document.querySelector('.sidebar__wrapper');
const tagsWrap = document.querySelector('.tags');
const expandTagsButton = document.querySelector('.expand-button');
const allTags = document.querySelectorAll('.tags__btn');


noUiSlider.create(html5Slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

html5Slider.noUiSlider.on('update', function (values, handle) {
    const value = values[handle];

    if (handle) {
        inputNumber2.value = value;
    } else {
        inputNumber.value = value;
    }
});

inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber2.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});

sidebarWrapper.addEventListener('click', function(event) {
    const expandableArea = event.target.classList.contains('sidebar__filter-title') || event.target.parentNode.classList.contains('sidebar__filter-title');
    if (expandableArea) {
        const expandableTitle = event.target.classList.contains('sidebar__filter-title') ? event.target : event.target.parentNode; 
        expandableTitle.classList.toggle('sidebar__filter--expanded')
        expandableTitle.nextElementSibling.classList.toggle('sidebar__filter-body--visible')
    }
})

tagsWrap.addEventListener('click', function(event) {
    if (event.target.classList.contains('tags__btn') && !event.target.classList.contains('expand-button') ) {
        event.target.classList.toggle('tags__btn-active');
    }
})

expandTagsButton.addEventListener('click', function(event) {
console.log('allTags', allTags);
    const expandableButtons = Array.from(allTags).slice(13, -1);
    console.log('slicedButtons', expandableButtons);
    if (event.target.classList.contains('tags__btn--expanded')) {
        event.target.innerText = 'Свернуть';
    } else {
        event.target.innerText = 'Показать еще';
    }

    event.target.classList.toggle('tags__btn--expanded')
    expandableButtons.forEach(button => button.classList.toggle('tags__btn--hidden'));
})