$(".owl-carousel.single-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  arrows: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    993: {
      items: 3,
    },
    1201: {
      items: 4,
    },
  },
});

$(".owl-carousel.carousel-users").owlCarousel({
  loop: true,
  nav: false,
  margin: 0,
  slideBy: 1,
  autoplayTimeout: 6000,
  autoplay: true,
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 4,
    },
    993: {
      items: 8,
    },
    1201: {
      items: 10,
    },
  },
});

$(".owl-carousel.carousel-comments").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 0,
  slideBy: 1,
  autoplayTimeout: 10000,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    993: {
      items: 2,
    },
    1201: {
      items: 2,
    },
  },
});
