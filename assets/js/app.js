$(document).ready(function () {
  // HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Carrossel de Programas
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Ativa as setas de navegação
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], // Personalize as setas
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
});
