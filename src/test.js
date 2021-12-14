    /* 
        Etapes :
            1. Recup les points de la timeline, le num d'étape et le nom d'étape
            2. Tester le numéro d'étape --> Créer variable ? Changer les ID de num et nom d'étape ? (valable que avec incrémentation)
            3. Changer en fonction du num d'étapes les éléments recups précédement
            4. Incrémenter le numéro d'étape en fonction de la différence entre le précédent et l'actuel
    */

function test() {
    let timeline = document.querySelectorAll(".timeline__point")
    let numEtape = document.querySelector(".num-etape")
    let nomEtape = document.querySelector(".nom-etape")

    console.log(timeline)

 /*   var etapes = [
        {
             : 
        }

    ]
    
    timeline.forEach (function(el, i) {

        if (el.classList.contains("-actif")) {
            el.innerHTML = '<img src="./assets/Etoile.svg" alt="Etoile étape actif"><br/><h4>Milieu</h4>'
        } 
        else {
            el.innerHTML = '<img src="./assets/Icones/eclipse.svg" alt="ellipse étape">'
        }      

    }) */
}