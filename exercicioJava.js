// 1 Fac

let nome = "Vinicius";
console.log(nome);

// 2 Fac

let texto = "strings"
console.log(texto =="strings");

// 3 Fac

let b = 6;
console.log( b >= 10);

//4 Fac

let idade = 19;
if (idade >= 18 && idade <= 65) {
    console.log("Adulto");
} else {
    console.log("Não adulto");
}

// 5 Fac

let idadE = 19;
if (idade >= 16 && idadE <= 65) {
    console.log("Pode votar!");
} else {
    console.log("Não pode votar!");
}

// 6 Fac

let number = 101;
if ( number >= 50 && number <= 100){
console.log(true);
} else {
    (number <50 && number > 100)
    console.log(false);
}

// 1 Med

let IdadeUser = 90;
let Nomi = "nome:";
let ydade = "Idade:";
console.log(Nomi);
console.log(ydade + IdadeUser);
console.log(IdadeUser >=18); 

// 2 Med 

let num3 = 22;
let num4 = 17;

if(num3 > num4){
    console.log(num3)
} else {console.log(num4)};

//3 Med

let text1 = "lamborghini"

if (text1.length > 9){
    console.log("texto grande")
} else { console.log("Texto menor")};

// 4 Med

let num = 13; 
let num1 = 14; 
let par = num % 2 === 0;
let pars = num1 % 2 === 0;

console.log(par)
console.log(pars)

// 5 Med 

let texto1 = "JavaScript";
let texto2 = texto1.includes("JavaScript");
console.log(texto2);

// 6 Med


let a = 4000;
console.log( a >= 2000);

// 1 dif

let D = "J4v45cr1p7";
let E = D.length >= 8;
let F = D.includes(1,2,3,4,5,6,7,8,9,0);
console.log(E && F);

// 2 dif 

let nota1 = 3;
let nota2 = 7;
let nota3 = 9; 
let divisão = (nota1 + nota2 + nota3) /3;
if ( divisão >=7) {
    console.log("aprovado");
} else{console.log("Reprovado")};

// 3 dif

let ano = 2024
if( ano %4 === 0 && ano %100 !== 0){
    console.log("É bissexto");
} else{console.log("Não é bissexto!")};

// 4 dif

let nu1 = 692
let nu2 = 512
let nu3 = 213
if(nu1 > nu2 && nu1 > nu3){
    console.log ("692 é o maior dos três!")
}else if( nu1 < nu2 && nu1 < nu3){
    console.log("692 não é o maior!");
}else{console.log("os três são iguais")}

// 5 dif

const usuarioCorreto = "usuario123"; 
const senhaCorreta = "senha123"; 

function simularLogin(usuario, senha) {
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Login bem-sucedido!");
    } else {
        console.log("Usuário ou senha incorretos.");
    }
}

const usuarioInput = "usuario123"; 
const senhaInput = "senha123"; 

simularLogin(usuarioInput, senhaInput);

simularLogin();

// 6 dif

function verificaSoma(num1, num2, num3) {
    return num3 === (num1 + num2);
}

const numero1 = 5; 
const numero2 = 10; 
const numero3 = 15; 

const resultado = verificaSoma(numero1, numero2, numero3);
console.log(resultado);

// 7  dif

const usuarioCorrete = "usuario123"; 
const senhaCorrete = "senha123"; 
let tentativas = 0; 
const maxTentativas = 3;

const usuarioInpute = "usuario123"; 
const senhaInpute = "senhaErrada"; 

while (tentativas < maxTentativas) {
    if (usuarioInpute === usuarioCorrete && senhaInpute === senhaCorrete) {
        console.log("Login bem-sucedido!");
        break;
    } else {
        tentativas++;
        console.log(`Usuário ou senha incorretos. Tentativas restantes: ${maxTentativas - tentativas}`);
    }

    if (tentativas === maxTentativas) {
        console.log("Conta bloqueada. Muitas tentativas incorretas.");
    }
}

//8 dif

function calcularPontuacaoFinal(notaTrabalho, frequencia, notasProvas) {
    const fezTrabalhoExtra = notaTrabalho > 0;
    const teveAltaFrequencia = frequencia > 80;
    const todasNotasAcimaDe7 = notasProvas.every(nota => nota > 7);
    
    if (fezTrabalhoExtra && teveAltaFrequencia && todasNotasAcimaDe7) {
        return "Aprovado com uma pontuação final alta!";
    } else {
        return "Reprovado.";
    }
}

const notaTrabalho = 5; 
const frequencia = 85; 
const notasProvas = [8, 7.5, 9]; 

const resultadoFinal = calcularPontuacaoFinal(notaTrabalho, frequencia, notasProvas);
console.log(resultadoFinal);
