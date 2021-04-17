$(".owl-carousel.carousel-discover").owlCarousel({
  loop: true,
  margin: 25,
  nav: true,
  arrows: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
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
