let nome = "Lord Leonard"
let exp ="11000"

if (exp < 1000) {
    exp = "Ferro"
}
else if (exp >= 1001 && exp <= 2000 ) {
    exp = "Bronze"
}
else if (exp >= 2001 && exp < 6000){
    exp ="Prata"
}
else if (exp >= 6001 && exp <= 7000) {
    exp = "Ouro"
}
else if (exp >= 7001 && exp <= 8000){
    exp = "Platina"
}
else if (exp >= 8001 && exp <= 9000){
    exp = "Ascendente"
}
else if (exp >= 9001 && exp <= 10000){
    exp = "Imortal"
}
else if (exp >= 10001) {
    exp = "Radiante"
}

console.log ("O Heroi " + nome + " está no nível " + exp)