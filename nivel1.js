// Nível 1- Procurando uma frutas
const frutas = ["Morango", "Banana", "Uva", "Abacaxi", "Limão"];
console.log("Tem banana?", frutas.includes("Banana"));

//2 - Verificando uma linguagem
let linguagens = ["JavaScript", "Python", "Java", "C#", "PHP"];
console.log("Existe JavaScript?", linguagens.includes("JavaScript"));
console.log("Existe Python?", linguagens.includes("Python"));
console.log("Existe C++?", linguagens.includes("C++"));

//3 - Encontrando a posição
const nomes = ["Emanuelly", "Gabriela", "Leticia", "Maria", "Paloma", "Pamela"];
console.log("Posição de Maria", nomes.indexOf("Maria"));


//4 -  Aluno não encontrado
console.log("Posição do Kevin:", nomes.indexOf("Kevin"));

//Com esse método conseguimos encontrar no nosso array se há ou não a nossa variável.