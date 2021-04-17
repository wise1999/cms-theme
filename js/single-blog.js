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
