let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function(e) {

    mouseX = e.pageX;
    mouseY = e.pageY;

});

function follow(beeId, speed){

    let bee = document.getElementById(beeId);

    let posX = 0;
    let posY = 0;

    setInterval(function(){

        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;

        bee.style.left = posX + "px";
        bee.style.top = posY + "px";

        if(mouseX > posX){
            bee.style.transform = "scaleX(-1)";
        }else{
            bee.style.transform = "scaleX(1)";
        }

    },20);

}

follow("bee",0.08);
follow("bee2",0.05);
follow("bee3",0.03);


function acaoMisteriosa() {

    alert("Olá professor Flavio!!! 👋 Esse é o Getulio, a minha mini Torre de Hidroponia, suas mudas de morango e seu painel de controle ainda em desenvolvimento (click em ''OK'' para ver). O painel tambem foi desenvolvido com HTML, CSS e JavaScript, além da linguagem C++ para o controle do hardware.");

    let foto = document.getElementById("foto");

    if (foto.src.includes("foto.jpg")) {
        foto.src = "foto2.jpg";
    } else {
        foto.src = "foto.jpg";
    }

    let audio = new Audio("som.mp3").play();

}