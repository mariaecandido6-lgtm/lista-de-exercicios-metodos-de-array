//Nível 6 — Combinando métodos
//20- Pesquisa de produto 
let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];
//Verificar se "Café" existe usando includes().
console.log("Café existe?" , produtos.includes("Café"));

//Descobrir sua posição usando indexOf().
console.log("Posição do café:" , produtos.indexOf("Café"));

//Criar uma cópia parcial usando slice().
let copia = produtos.slice(1, 4);
console.log("Cópia parcial:" , copia);

//Remover "Leite" usando splice().
produtos.splice(3, 1);
console.log("Lista sem leite:" , produtos);

//Transformar a lista em texto usando join().
let texto = produtos.join(", ");
console.log("Lista em texto:", texto);

//21- Organizando uma lista
let nomes = [
    "Gabi",
    "Luiza",
    "Gi",
    "Lua",
    "Ana",
    "Gabriela",
    "Pam",
    "Felipe"
];

//Exibir a lista original.
console.log("Lista original:" , nomes);

//Ordenar com sort().
nomes.sort();
console.log("Ordenada:" , nomes);

//Inverter com reverse().
nomes.reverse();
console.log("Invertida:" , nomes);

//Transformar o resultado em uma string utilizando join().
let resultados = nomes.join("- ");
console.log("Resultado final:", resultados);


//22- Transformar o resultado em uma string utilizando join().
let playlist = [
    "99 ovelhas",
    "odres novos",
    "desperta",
    "templo vivo",
    "até o fim",
    "Lazaro",
    "tu és amor",
    "templo vivo"
];

//verificar se uma música está na playlist usando includes();
console.log("A música desperta está na playlist?" , playlist.includes("A música despertsa") );

//descobrir a posição usando indexOf();
console.log("Posição da música:" , playlist.indexOf("A música desperta"));

//criar uma seleção de músicas usando slice();
let selecao = playlist.slice(2, 5);
console.log("Seleção:" ,selecao);

//remover uma música usando splice()
playlist.splice(4, 1);
console.log("Playlist após remover:" , playlist);

//ordenar a playlist com sort();
playlist.sort();
console.log("Playlist ordenada:" , playlist);

//inverter a playlist com reverse();
playlist.reverse();
console.log("Playlist invertida:" , playlist);

//exibir a playlist final usando join()
let playlistFinal = playlist.join(" | ");
console.log("Playlist final:" , playlistFinal);


// Desafio Final — Sistema de Lista
// Verificar se um aluno existe
let alunos = [
    "Gabi",
    "Luiza",
    "Gi",
    "Lua",
    "Ana",
    "Gabriela",
    "Pam",
    "Felipe",
    "Anabelle", 
    "Sara"

];
// 1 - Verificar se um aluno existe
console.log("1 - Aluno existe?");
console.log(alunos.includes("Felipe"));

// 2 - Encontrar posição de um aluno
console.log("\n2 - Posição do aluno:");
console.log(alunos.indexOf("Anabelle"));

// 3 - Criar uma parte da lista
console.log("\n3 - Parte da lista:");
let parteLista = alunos.slice(2, 5);
console.log(parteLista);

// 4 - Remover aluno
console.log("\n4 - Removendo aluno:");
alunos.splice(3, 1);
console.log(alunos);

// 5 - Inserir aluno
console.log("\n5 - Inserindo aluno:");
alunos.splice(2, 0, "Sara");
console.log(alunos);

// 6 - Ordenar alunos
console.log("\n6 - Lista ordenada:");
alunos.sort();
console.log(alunos);

// 7 - Inverter lista
console.log("\n7 - Lista invertida:");
alunos.reverse();
console.log(alunos);

// 8 - Exibir lista como texto
console.log("\n8 - Lista como texto:");
console.log(alunos.join(", "));

