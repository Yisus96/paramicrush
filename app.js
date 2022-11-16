

function moverPosicionRandom(elm){
    elm.style.position='absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeigth) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("perro");
let btnNo = document.getElementById("gato");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];


btnSi.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target) })


btnNo.addEventListener('click', function(e){
    alert("SABIA QUE NO TE PUEDES NEGAR A LOS TACOS, MANDA WHATS 😊😊");

    divModoSexo.style.display = 'block';
    const cancion =new Audio('img\\wisin-yandel-noche-de-sexo-coro.mp3');
    cancion.play();
})
console.log("btnSi");
