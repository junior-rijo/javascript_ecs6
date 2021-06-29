//var serve para armazenar dados na memoria ou seja evitar repetições
/*
var nome = 'Junior Rijo'

var idade = '26 anos'
*/
//condicionais
//var possuiGraduacao = 0
//var possuioDoutorado = 0
/* condicao simples
if(possuiGraduacao){
    console.log('é verdade esse bilhete')
} else{
    console.log('Falso')
}
*/
/*
if(possuiGraduacao){
    console.log('Verdadeiro')
} else if(possuioDoutorado){
    console.log('Falso')
} else{
    console.log('Olámundo')
}
*/
//Funções
//Declara a função
function areaQuadrado(lado) {
    return lado * lado
}
//ativo a função
console.log(areaQuadrado(4));
//Parametros no caso são altura e peso
//E argumentos são os valores quando executamos a função no caso 90, 180
function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(90, 1.80))

//FUnção de cor favorita

function corFavorita(cor) {
    if (cor == 'azul') {
        return 'Eu gosto do céu'
    } else if (cor == 'verde') {
        return "eu não gosto de verde"
    } else {
        return 'Eu não gosto de cores'
    }
}
//Os parametros são digitados no browser

//Argumentos podem ser funções
addEventListener('click', function () {
    console.log('oi')
})

//QUando não definimos o valor a função retorna udefined

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc)
}
imc2(20, 30.9);

//Uma função pode retornar qualquer valor

//função terceira idade
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor digite seu número'
    } else if (idade >= 60) {
        return true;
    } else {
        return false
    }
}

console.log(terceiraIdade(60))

//variaveis e funções definidas dentros de um bloco {} não são visiveis fora dele.

function faltaVisitar(paisesVisitados) {
    var totalPaise = 193;
    return `Faltam visitar ${totalPaise - paisesVisitados}`

}

//Exercicios 
// Crie uma função para verificar se um valor é Truthy res-> utiliza o !! para verificação do parametro chamado dado

function verificaValor(dado) {
    return !!dado;
}
// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(area) {
    return area * 4;
}
perimetroQuadrado(4);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} + ${sobrenome}`;
}
// Crie uma função que verifica se um número é par
function isEven(numero) {
    var modulo = numero % 2;
    if (modulo === 0) {
        return 'O número é par';
    } else {
        return 'é impar'
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
    return typeof dado;//retorna o tipo dado do para 'dado'.
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll'
addEventListener('click', function () {
    console.log('Junior Rijo')
})
//corrigindo os erros

/*function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países pa
    }
    function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises
    }
    precisoVisitar(20);
    jaVisitei(20);
    */
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países pa`
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
}
//Resolução era apenas colocar a variavel fora do escopo da função.

//Objetos -> é um conjunto de varáveis
//escopo 
var pessoa = {
    nome: 'Junior',
    idade:28,
    profissao: 'Estagiário',
}

//acessando o objeto
pessoa.idade;

//metodos
var quadrados = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado;//acessando uma variavel já criada usamos o this que faz sempre referencia ao objeto.
    }
}

//Tudo é objeto
nome = 'Junior'

//DOM PARA INICIANTES
//Interface que representa documentos Html e Xml através de objetos, conseguimos manipular estilos e textos, window é o objeto global do browser, possui diferentes metodos.
//o Dom ele representa o que é o final do site, por exemplo quando acessamos o inspecionar elementos. o Dom é aquele código que aparece.

//window.alert('olá mundo')window e document são os metodos que mais usaremos
//acessando o DOM 
const h1Selencionado = document.querySelector('h1')
//Element é o objeto que eu selecionei
//addEventList dois principais metodos ('click', calback)

function teste(){
    console.log('Clicou em ,', h1Selencionado.innerText)
}

//adcionando o envento através do addEventListener
h1Selencionado.addEventListener('click', teste)

//Exercicios 
//Retorne o url da página atual utilizando o objeto window
console.log('O href da página atual é ',window.location.href)
//selecione o primeiro elemento da pagina que possue a classe ativo.

const classeAtivo = document.querySelector('.ativo');

//retorne a linguagem do navegador
const languageNavegador = window.navigator.language

console.log('A linguagem do Navegador é ', languageNavegador)