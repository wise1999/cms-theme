$(".gallery.owl-carousel").owlCarousel({
  autoplay: false,
  autoplayTimeout: 5000,
  margin: 0,
  slideBy: 1,
  arrows: true,
  nav: true,
  dots: true,
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
  },
  onInitialized: counter, //When the plugin has initialized.
  onTranslated: counter, // When the translation of the stage has finished.
});
function counter(event) {
  var element = event.target; // DOM element, in this example .owl-carousel
  var items = event.item.count; // Number of items
  var item = event.item.index + 1; // Position of the current item

  // it loop is true then reset counter from 1
  if (item > items) {
    item = item - items;
  }
  $(".owl-dots").html(item + '<div class="line"></div>' + items);
}
