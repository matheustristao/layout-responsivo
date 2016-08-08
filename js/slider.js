window.addEventListener("load", function load() {

    var slider = new Object();

    /*
     *  Aqui eu capturo o alt da imagem e faço um inner html em legenda com ele
     */
    slider.escreverLegenda = function (obj) {
        var legenda = obj.querySelector("img").getAttribute("alt");
        document.getElementById("legenda").innerHTML = legenda;
    };

    /*
     *  Adiciona a classe ativo para a primeira figura, o que permite que seu opacity seja 1
     *  Além disso chamo a função escreverLegenda e envio esse elemento como parâmetro
     */
    slider.loadFirstSlide = function () {

        var element = document.querySelector("figure a:first-child");

        element.classList.add("ativo");
        this.escreverLegenda(element);
    };

    slider.avancar = function () {

        /// aqui eu limpo o intervalo definido
        clearInterval(intervalo);

        var element = document.querySelector(".ativo");

        // Aqui eu verifico se o elemento irmão do elemento que eu estou (elemento a) existe
        if (element.nextElementSibling) {
            //Se ele existir, a classe ativo é adicionada e a função escreverLegenda é chamada enviando esse elemento
            element.nextElementSibling.classList.add("ativo");
            slider.escreverLegenda(element.nextElementSibling);

            //Aqui a classe ativo é removida do elemento atual
            element.classList.remove("ativo");
        } else {
            //Aqui a classe ativo é removida do elemento atual e o primeiro slide é carregado novamente
            element.classList.remove("ativo");
            slider.loadFirstSlide();
        }

        //Aqui eu atribuo à intervalo a função setInterval, do JS, enviando como primeiro parâmetro a função avancar e definindo 4 milissegundos para ela ser chamada
        intervalo = setInterval(slider.avancar, 4000);
    };

    //Mesma coisa que a função anterior, porém utilizando previousElementSibling para indicar irmão anterior e last-child para ir para o último irmão da lista
    slider.retornar = function () {

        clearInterval(intervalo);

        var element = document.querySelector(".ativo");

        if (element.previousElementSibling) {
            element.previousElementSibling.classList.add("ativo");
            slider.escreverLegenda(element.previousElementSibling);
            element.classList.remove("ativo");
        } else {
            element.classList.remove("ativo");
            element = document.querySelector("#slider a:last-child");
            element.classList.add("ativo");
            this.escreverLegenda(element);
        }
        intervalo = setInterval(slider.avancar, 4000);
    };

    slider.loadFirstSlide();
    slider.escreverLegenda(document.querySelector("figure a:first-child"));

    var intervalo = setInterval(slider.avancar, 4000);

    document.querySelector(".prev").addEventListener("click", slider.retornar, false);
    document.querySelector(".next").addEventListener("click", slider.avancar, false);
});