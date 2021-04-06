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
/*
function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(10))//sempre usar "()"parentenses para exevutar a função

function imc(peso, altura){
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(80, 1.83))

addEventListener('click', function(){console.log('clicou')})

function faltaVisitar(paisesVisitados){
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} paises`
}
faltaVisitar(20)*/

function verficarValor (dado){
    return !!dado;
}

/*Objetos */
//sempre usar chaves e valor ex:

var pessoa = {
    nome: 'Junior',
    idade: '29'
}

//é uma propriedade que possui uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area (lado){
        return lado * lado
    },
    perimetro (lado){
        return this.lados * lado    
    }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

//metodos math
console.log(Math.random())

//criando objeto 2
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#000',
    cpf: '123.333',
}
//vocÊ pode adcionar novas propriedades e metodos tbm

menu.backgroundColor = 'blue'
//novos parametros
menu.color = 'red'


//atribuir a uma variavel
var bg = menu.backgroundColor
var cpf = menu.cpf

//exercicio 

var dadosPessoais = {
    nome: 'Junior',
    sobrenome: 'Rijo',
    idade: '23',
    cidade:'São paudlo',
}

dadosPessoais.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

var idade = 18 

var podeBeber
podeBeber = (idade >= 18 ) ? 'Pode Beber' : 'Probido';

console.log(podeBeber)

//Exercicio
var scroll = 1000

scroll += 500
//DOM
