// Nível 2 — slice()
//5- Copiando parte do array
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
const novasFrutas = frutas.slice(1,4);
console.log("Array original (intacto):", frutas);
console.log("Novo array fatiado:", novasFrutas);

//6- Primeiros elementos
const nomes = ["Duda", "Pamela", "let", "Manu", "Kevin", "Thiago", "Gabi", "Giovanna"];
const novosNomes = nomes.slice(0,3);
console.log("Array original (intacto):", nomes);
console.log("Novo array fatiado:", novosNomes);

//7- Últimos elementos
const num = ["1", "2", "3", "4", "5", "6", "7", "8"];
const novosNum = num.slice(5,8);
console.log("Array original (intacto):", num);
console.log("Novo array fatiado:", novosNum);

//8- slice() não altera o original
const number = ["1", "2", "3", "4", "5"];
const novosNumber = num.slice(1,4);
console.log("Array original  (intacto):", number);
console.log("Novo array fatiado:", novosNumber);


