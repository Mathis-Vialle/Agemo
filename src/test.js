function test() {
    let test = document.querySelectorAll(".timeline__point");
    console.log(test)
    
    test.forEach (function(el, i) {

        if (el.classList.contains("-actif")) {

            console.log(el);

            el.innerHTML = '<img src="./assets/Etoile.svg" alt="Etoile étape actif"><br/><h4>Milieu</h4>'

        }
    })
}