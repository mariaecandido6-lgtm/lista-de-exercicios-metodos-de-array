//Nível 3 — splice()
// 9- Removendo elementos
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
frutas.splice(2, 1);
console.log("Depois:", frutas);

//10 -  Removendo vários elementos
let nomes = ["Gabi", "Let", "Manu", "Paloma", "Pamela", "Kevin"];
nomes.splice(2,3);
console.log(nomes);

//11- Substituindo elementos
let cores = ["Vermelho", "Azul", "Verde", "Amarelo"];
cores.splice(2, 1, "Roxo");
console.log(cores);

//12-  Inserindo elementos
let animais = ["Cachorro", "Gato", "Cavalo"];
animais.splice(2,0 , "Papagaio", "Coelho" );
console.log(animais);