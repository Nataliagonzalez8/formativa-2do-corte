

// Activación de jQuery Función principal de jQuery
$(document).ready(function(){
	//Activación de Slick-Slider
	$('.slick-slider').slick({
		autoplay: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 200,
		arrows: true
	});

document.querySelector('.slick-prev').innerHTML = '<img src="chevron-left-solid.svg">';
document.querySelector('.slick-next').innerHTML = '<img src="chevron-right-solid.svg">';

// Activación de transición del menú principal y del menú móvil
    $('header nav a, aside#menu nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu').animate({
            right: -70
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu nav a').click(function(){
        $('aside#menu').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });


});