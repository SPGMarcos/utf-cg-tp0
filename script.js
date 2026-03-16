function acaoMisteriosa() {

    alert("Olá professor Flavio!!! 👋 Esse é o Getulio, a minha mini Torre de Hidroponia, suas mudas de morango e seu painel de controle ainda em desenvolvimento (click em ''OK'' para ver). O painel tambem foi desenvolvido com HTML, CSS e JavaScript, além da linguagem C++ para o controle do hardware.");

    let foto = document.getElementById("foto");

    if (foto.src.includes("foto.jpg")) {
        foto.src = "foto2.jpg";
    } else {
        foto.src = "foto.jpg";
    }

    let audio = new Audio("som.mp3");
    audio.play();

}