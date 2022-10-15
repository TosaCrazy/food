


$('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	smartSpeed: 600,
	autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
})