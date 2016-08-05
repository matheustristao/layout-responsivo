/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", function load() {

    createMenu();

    var main = document.getElementsByTagName("main");
    var section = document.getElementsByTagName("section");
    var footer = document.getElementsByTagName("footer");

    var menu = document.getElementById("menu");
    var card = document.getElementById("card");

    menu.addEventListener("click", function () {
        toogleMobileMenu(true);
    });

    for (var i = 0; i < section.length; i++) {
        section[i].addEventListener("click", function () {
            toogleMobileMenu(false);
        });
    }

    footer[0].addEventListener("click", function () {
        toogleMobileMenu(false);
    });

    window.addEventListener('resize', function () {
        toogleMobileMenu(false);
    });

    window.addEventListener("scroll", function () {
        showFixedNav();
    });

    if (card) {
        card.addEventListener("click", function () {
            flipCard(card);
        });
    }

});

function createMenu() {
    var menu = document.getElementById("menuList");

    var items = [
        {
            name: "home",
            link: "index.html"
        },
        {
            name: "sobre o site",
            link: "sobre.html"
        },
        {
            name: "contato",
            link: "contato.html"
        },
        {
            name: "página 3",
            link: "#"
        },
        {
            name: "página 4",
            link: "#"
        }
    ];

    for (var i = 0; i < items.length; i++) {

        var li = document.createElement("li");
        var a = document.createElement("a");

        a.setAttribute('href', items[i].link);
        a.appendChild(document.createTextNode(items[i].name));

        li.appendChild(a);

        if (items[i].name === "home") {
            li.className = "itemMenu current";
        } else {
            li.className = "itemMenu";
        }

        menu.appendChild(li);
    }

}

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

function flipCard(card) {
    if (card.className.indexOf("hover") > -1) {
        card.className = card.className.replace("hover", "");
    } else {
        card.className += " hover";
    }
} 