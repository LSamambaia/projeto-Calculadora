const visor = document.getElementById("resultado");

function insert(num) {

    visor.textContent += num
}

function clean() {
    visor.textContent =""
    
}

function backSpace(num) {
    
    let numeroVisor= visor.textContent;

    visor.textContent= numeroVisor.substring(0,numeroVisor.length-1);
}

function calcular() {
    let calculo =visor.textContent;
    

    if (calculo.length > 2) {
        visor.textContent = eval(calculo)
        
        
    }else{
        visor.textContent ="Erro"
        visor.style.color="red"
        visor.style.textAlign="center"

        setTimeout(() => {

            clean()
            visor.style.color="black"
            visor.style.textAlign="end"
            
        }, 1000);
    }
    
}