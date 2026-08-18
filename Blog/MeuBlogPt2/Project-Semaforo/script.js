const luzVermelha = document.querySelector(".luz-vermelha");
const luzamarela = document.querySelector(".luz-amarela");
const luzVerde = document.querySelector(".luz-verde");

function acender(luz) {
   luzVermelha.classList.remove("acesa");
   luzamarela.classList.remove("acesa");
   luzVerde.classList.remove("acesa");
   luz.classList.add("acesa");
}
function cicloSemaforo() {
    acender(luzVerde);
    setTimeout(function(){
        acender(luzamarela);
        setTimeout(function(){
            acender(luzVermelha)
            setTimeout(function(){
                cicloSemaforo();
            }, 4000);
        },1500);
    }, 4000);
}
cicloSemaforo();