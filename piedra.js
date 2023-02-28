var opcion_maquina
var opcion_maquina2
var yo2
var yo
var res


let veces=+prompt("dijite cuantas veces quiete jugar")
for(let i=0;i <veces;i++){
    function aleatorio(min ,max){//se utilizo el math.random para crear numeros aleatorios estre el minimo y el maximo
        return Math.random()*(max-min)+min;
    }
    opcion_maquina= Math.floor(aleatorio(1,4))// el floor lo utilizamos para redondear los numeros dados por el random
    
    if(opcion_maquina==1){
        opcion_maquina2="piedra"
    }
    if(opcion_maquina==2){
        opcion_maquina2="papel"
    }
    if(opcion_maquina==3){
        opcion_maquina2="tijeras"
    }

    yo=+prompt("dijite una opcion \n 1.piedra \n 2.papel\n 3.tijeras")

    if(yo==1){
        yo2="piedra"
    }
    if(yo==2){
        yo2="papel"
    }
    if(yo==3){
        yo2="tijeras"
    }
    console.log("la maquina saco "+opcion_maquina2 + " y tu sacaste "+yo2)

    if(opcion_maquina2=="piedra" && yo2=="piedra"){
        res="espate"
        console.log(res)
    }else if(opcion_maquina2=="piedra" && yo2=="papel"){
        res="papel le gana ala piedra gana el humano"
        console.log(res)
    }else if(opcion_maquina2=="piedra" && yo2=="tijeras"){
        res="las tijeras píerden contra la piedra, gana la maquina"
        console.log(res)
    }else if(opcion_maquina2=="papel" && yo2=="papel"){
        res="empate"
        console.log(res)
    }else if(opcion_maquina2=="papel" && yo2=="tijeras"){
        res="las tijeras ganan contra el pape, gana el humano"
        console.log(res)
    }else if(opcion_maquina2=="papel" && yo2=="piedra"){
        res="la piedra pierde contra  el papel, gana la maquina "
        console.log(res)
    }else if(opcion_maquina2=="tijeras" && yo2=="tijeras"){
        res="empate"
        console.log(res)
    }else if(opcion_maquina2=="tijeras" && yo2=="papel"){
        res="las tijeras ganan contra del papel, el ganador es la maquina"
        console.log(res)
    }else if(opcion_maquina2=="tijeras" && yo2=="piedra"){
        res="las tijeras píerden contra la piedra, gana el humano "
        console.log(res)
    }
}


