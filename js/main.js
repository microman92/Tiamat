var bigSlider = new Swiper('.slider-page__slider', {
	slidesPerView: 1,
	spaceBetween:10,
	autoHeight: true,
	pagination:{
		el: '.section-slider__pagination',
		type: 'bullets',
		clickable: 'true',
		bulletClass:'section-slider__pagination-item',
		bulletActiveClass:'section-slider__pagination-item_active'
	},
})


var salesSlider = new Swiper('.sales-slider', {
	loop: true,
	spaceBetween: 25,
	navigation:{
		nextEl:'.sales-slider__arrow_next',
		prevEl:'.sales-slider__arrow_prev',
	},
	pagination:{
		el: '.section-slider__pagination',
		type: 'bullets',
		clickable: 'true',
		bulletClass:'section-slider__pagination-item',
		bulletActiveClass:'section-slider__pagination-item_active'
	},
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    940: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024:{
    	slidesPerView: 5,
    }
  },
})


var categoriesSlider = new Swiper('.categories-slider', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 50,
	navigation:{
		nextEl:'.categories-page__arrow_next',
		prevEl:'.categories-page__arrow_prev',
	},
	pagination:{
		el: '.section-slider__pagination',
		type: 'bullets',
		clickable: 'true',
		bulletClass:'section-slider__pagination-item',
		bulletActiveClass:'section-slider__pagination-item_active',
	},
	breakpoints: {
		320:{
			slidesPerView:1,
		},
		768:{
			slidesPerView:2,
		},
		1024:{
			slidesPerView:3,
		},
  },
})


var blogSlider = new Swiper('.blog-page__slider-container', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 30,
	navigation:{
		nextEl:'.blog-page__slider-arrow_next',
		prevEl:'.blog-page__slider-arrow_prev',
	},
	pagination:{
		el: '.section-slider__pagination',
		type: 'bullets',
		clickable: 'true',
		bulletClass:'section-slider__pagination-item',
		bulletActiveClass:'section-slider__pagination-item_active'
	},
	breakpoints: {
		320:{
			slidesPerView:1,
		},
		768:{
			slidesPerView:2,
		},
		1024:{
			slidesPerView:3,
		},
  },
})