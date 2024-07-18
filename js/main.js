function verificarVidas(vidaMaquina,vidaPlayer) {
    if (vidaPlayer==0) {
        console.log("Perdiste, intentalo de nuevo")
    }
    if (vidaMaquina==0) {
        console.log("Ganaste crack, seguí jugando")
    }
    
    
}
let vidaPlayer=3;
let vidaMaquina=3;
while (vidaPlayer!=0&&vidaMaquina!=0) {
    const maquina = Math.floor(Math.random()*3)+1;
        console.log("Bienvenidos a piedra, papel o tijeras");
            let elegirOpcion = parseInt( prompt(`
                Elige una opcion:           
                1_ Piedra            
                2_ Papel                   
                3_ Tijera
                `),);

switch (elegirOpcion) {
    case 1:
        if (maquina==3) {
            vidaMaquina--;
            console.log("Elegiste Piedra y la maquina tijeras, ganaste esta ronda"); 
                                
        }
        if (maquina==2) {
            vidaPlayer--;
            console.log("Elegiste Piedra y la maquina papel, perdiste esta ronda");
            
        }
        if (maquina==1) {
            console.log("Elegiste Piedra y la maquina también, empataste esta ronda");                      
        }
        console.log("Tus vidas son"+" "+vidaPlayer)
        console.log("Vidas de la maquina"+" "+vidaMaquina)
               
        break;
    case 2:
        if (maquina==1) {
            vidaMaquina--;
            console.log("Elegiste papel y la maquina piedra, ganaste esta ronda");                      
        }
        if (maquina==3) {
            vidaPlayer--;
            console.log("Elegiste papel y la maquina tijeras, perdiste esta ronda");
            
        }
        if (maquina==2) {
            console.log("Elegiste papel y la maquina también, empataste esta ronda");                      
        }
        console.log("Tus vidas son"+" "+vidaPlayer)
        console.log("Vidas de la maquina"+" "+vidaMaquina)
        break;
    case 3:
        if (maquina==2) {
            vidaMaquina--;
            console.log("Elegiste tijeras y la maquina papel, ganaste esta ronda");                      
        }
        if (maquina==1) {
            vidaPlayer--;
            console.log("Elegiste tijeras y la maquina piedra, perdiste esta ronda");
            
        }
        if (maquina==3) {
            console.log("Elegiste tijeras y la maquina también, empataste esta ronda");                      
        }
        console.log("Tus vidas son"+" "+vidaPlayer)
        console.log("Vidas de la maquina"+" "+vidaMaquina)
        break;
        
    
}

}
verificarVidas(vidaMaquina,vidaPlayer);
