let mobileToggler = document.querySelector('.mobile-toggler');
let closeButton = document.querySelector('.close');

mobileToggler.onclick = function () {
    mobileToggler.classList.toggle('mobile-menu-open');
}

closeButton.onclick = function () {
    mobileToggler.classList.remove('mobile-menu-open');
};

var iconClick = document.getElementsByClassName('icon-border');
var dropdownMenu = document.getElementsByClassName('dropdown');
var mobileMedia = window.matchMedia('(max-width: 992px)');
var headerContainer = document.querySelector('#page-header .container')

if (mobileMedia.matches) {
    headerContainer.classList.add('container-fluid')
    headerContainer.classList.remove('container');
    $('.icon-border').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('icon-rotate');
        $(this).closest('.has-children').find('.dropdown').toggleClass('collapse');
    });
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var nav = document.querySelector('#page-header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add('navigation-scrolled');
    } else {
        nav.classList.remove('navigation-scrolled');
    }
}
