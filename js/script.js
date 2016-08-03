/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", function load() {

    var main = document.getElementsByTagName("main");
    var footer = document.getElementsByTagName("footer");

    var menu = document.getElementById("menu");

    menu.addEventListener("click", function () {
        toogleMobileMenu(true);
    });

    main[0].addEventListener("click", function () {
        toogleMobileMenu(false);
    });

    footer[0].addEventListener("click", function () {
        toogleMobileMenu(false);
    });

    window.addEventListener('resize', function () {
        toogleMobileMenu(false);
    });

    window.addEventListener("scroll", function () {
        showFixedNav();
    });

});

function toogleMobileMenu(show) {
    var menuList = document.getElementById("menuList");
    var items = menuList.getElementsByClassName("itemMenu");

    for (var i = 0; i < items.length; i++) {
        if (show === true) {
            if (!(items[i].className.indexOf("mobile") > -1)) {
                items[i].className += " mobile";
            }
        } else if (show === false) {
            items[i].className = items[i].className.replace("mobile", "");
        }
    }
}

function showFixedNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("tituloHeader").style.display = "none";

    } else {
        document.getElementById("tituloHeader").style.display = "block";
    }
}