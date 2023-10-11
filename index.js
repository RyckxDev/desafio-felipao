/*
- Variáveis ☑
- Operadores ☑
- Laços de repetição ☑
- Estruturas de decisões ☑
*/

let nomeDoBoneco = "Felipao"
let xpDoBoneco = 11.000 //o xp tem q ter "." 
let rankingDoBoneco = ""
let dado = 0;

if(xpDoBoneco <= 1.000){
    rankingDoBoneco = "Ferro"
} else if(xpDoBoneco >= 1.001 && xpDoBoneco <= 2.000){
    rankingDoBoneco = "Bronze"
} else if(xpDoBoneco >= 2.001 && xpDoBoneco <= 5.000){
    rankingDoBoneco = "Prata"
} else if(xpDoBoneco >= 5.001 && xpDoBoneco <= 7.000){
    rankingDoBoneco = "Ouro"
} else if(xpDoBoneco >= 7.001 && xpDoBoneco <= 8.000){
    rankingDoBoneco = "Platina"
} else if(xpDoBoneco >= 8.001 && xpDoBoneco <= 9.000){
    rankingDoBoneco = "Ascendente"
} else if(xpDoBoneco >= 9.001 && xpDoBoneco <= 10.000){
    rankingDoBoneco = "Imortal"
} else {
    rankingDoBoneco = "Radiante"
}     

while (dado <= 1) {
    dado = Math.floor(Math.random() * 10);
}
     
console.log("O Herói de nome " + nomeDoBoneco + " está no nível " + rankingDoBoneco + " e ganhou um total de", dado, "poçoes de vida!")
