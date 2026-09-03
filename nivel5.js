//Nível 5 — reverse() e sort()
//16- Invertendo uma lista
let nomes = ["Gustavo", "Duda", "Kayke", "Gabi", "Gabriel"];
nomes.reverse();
console.log(nomes);

//17-  Ranking invertido
let colocacoes = ["1º Duda", "2º Gabi", "3º Leticia", "4º Ema"];
colocacoes.reverse();
console.log(colocacoes);

// 18- Ordenando nomes
const names = ["Davi", "Larissa", "Julia", "Giovani", "João", "Luiza", "Rafael", "Guilhermo"];
names.sort();
console.log(names);

//19- Ordenando números
let numeros = [50, 10, 100, 5, 25, 1];
numeros.sort((a, b) => a - b);
console.log("Números ordenados corretamente:", numeros);

//Porque 