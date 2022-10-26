$(document).ready(function () {


    $window = $(window);

    $('#intro').height($window.height()); //adapta la imagen de la ventana
    $window.scroll(function () {
        $('div.background').each(function (index, item) { //el each va porque es a c7u de los elemntos del array background
            let $scroll = $(item);
            let yPos = -($window.scrollTop() / $scroll.data('speed')); // es para que el scroll baje 
            let coords = '50%' + yPos + 'px'; // para que el rio me quede siempre en el medio (valor en x y valor en y)
            $scroll.css({ backgroundPosition: coords }); // toma las coordenadas declaradas en la variable coords
        })
    })

})
