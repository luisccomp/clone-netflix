const showSomeText = name => {
    console.log(`Clicked: ${name}`);
};

// Referenciando o JQuery dentro do Javascript
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})