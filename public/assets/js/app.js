// Déclaration de variables:
var cube = document.getElementById('cube');
var cylindre = document.getElementById('cylindre');
var sphere = document.getElementById('sphere');
var surface = document.getElementById('surface');
var submit = document.getElementById('submit');
var putData = document.getElementById('data-form');

// Évenements :
cube.addEventListener("click", options, true);
cylindre.addEventListener("click", options, true);
sphere.addEventListener("click", options, true);
submit.addEventListener("click", submitEvt, true);

window.onload = function init(){
    if(cube.checked = true){
        var inputCube = "<input type='number' name='coteCube' placeholder='Coté en cm' id='coteCube' step='0.1' min='0'>";
        putData.innerHTML = inputCube;
    }

    surface.checked = true;
}

function options(param){
    var value = param.toElement.value;

    switch (value) {
        case 'Cube':
            var inputCube = "<input type='number' name='coteCube' placeholder='Coté en cm' id='coteCube' step='0.1' min='0'>";
            putData.innerHTML = inputCube;
            break;

        case 'Cylindre':
            var inputCube = "<input type='number' name='rayonCylindre' placeholder='Rayon en cm' id='rayonCylindre' step='0.1' min='0'>" +
                "<input type='number' name='hauteurCylindre' placeholder='Hauteur en cm' id='hauteurCylindre' step='0.1' min='0'>";
            putData.innerHTML = inputCube;
            break;

        case 'Sphere':
            var inputCube = "<input type='number' name='rayonSphere' placeholder='Rayon en cm' id='rayonSphere' step='0.1' min='0'>";
            putData.innerHTML = inputCube;
            break;

        default:
            putData.innerHTML = "<div class='error'>Oops, nous ne reconnaissons pas cet objet. <span>:(</span></div>";
    }
};


function submitEvt(evt){
    let validate = document.getElementById('validate');
    for(var i=0; i < putData.childNodes.length; i++){
        if(putData.childNodes[i].value === ""){
            validate.innerHTML = "<div class='error'>Vous devez remplir tout les champs. <span>:(</span></div>";
            evt.preventDefault();
        }
        else if(putData.childNodes[i].value === "0"){
            validate.innerHTML = "<div class='error'>La valeur minimum est de 0,1. <span>:(</span></div>";
            evt.preventDefault();
        }
    }
}