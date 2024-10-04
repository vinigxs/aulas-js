// 1 Facil

let numero = [12, 23, 45];

console.log(numero);

// 2 Facil

const abc = [10, 20, 30, 40, 50];

console.log(abc[0]);

// 3 Facil

const T = [10, 20, 30, 40, 50];

console.log(T[1] = 100);

// 4 Facil

let nomes = ['Murilo', 'Gabriel', 'Vinicius', 'Carla', 'Pina'];
console.log(nomes.length);

// 5 Facil

let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma);


// 6 Facil

let nummeros2 = [1, 2 , 3, 4, 5];

nummeros2.pop([4]);

console.log(nummeros2);

// 7 Facil

let numeros3 = [1, 2 , 3];

numeros3.unshift(0);

console.log(numeros3);

// 8 Facil 

const primeira = [1,2, 3 ,4];
const segunda = [5, 6, 7, 8];
const cont = primeira.concat(segunda);

console.log(cont);

// 1 Medio 

let array = [15, 77, 45, 89, 50];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2 Medio 

const livros ={
    nome: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    nome2: 'Um conto de Duas Cidades',
    autor2: 'Charles Dickens', 
};

console.log(livros)

// 3 Medio

let numeros5 = [1, 2, 3, 4, 5];
let dobrados = numeros5.map(x => x * 2);

console.log(dobrados);

// 4 Medio 

let numeros6 = [10, 20, 5, 9];
let filtro = numeros6.filter(num11 => num11 > 10)

console.log(filtro);

// 5 Medio 

let elements = [ 10, 20 , 30, 40];
let pares= elements.every(x => x % 2 === 0);

console.log(pares); 

// 6 Medio

let numere = [-19, 20, 39];
let negative = numere.find(num12 => num12 < 0);

console.log(negative);

// 7 Medio

let numere3 = [1, 4, 5, 2];
let crescente = numere3.sort((a, b) => a - b);

console.log(crescente);

// 8 Medio 

let numere1 = [ 1, 3, 6, 7];
let troca = numere1.splice(1, 0, 2);

console.log(numere1);

// 1 Dificil 


