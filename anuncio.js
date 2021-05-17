var campos = [ 
    document.querySelector("#campo-anuncio"),
    document.querySelector("#campo-cliente"),
    document.querySelector("#campo-dt-inicio"),
    document.querySelector("#campo-dt-termino"),
    document.querySelector("#campo-investimento"),
];

// adicionar os campos na tabela
document.querySelector('#formulario').addEventListener("submit", function(event){

event.preventDefault();

var tr = document.createElement('tr');

campos.forEach(function(posicao) {
td = document.createElement('td');
td.textContent = posicao.value;
tr.appendChild(td);

});

var tabela = document.querySelector("#resultado");

tabela.appendChild(tr);

for(var i=0;i <=campos.length;i++){
this[i].value ='';
}

campos[0].focus();

});

//função para adicionar os campos no select
function Add() {
    var selectAnuncio = document.getElementById("teste1");
    var selectCliente = document.getElementById("teste2");
    var selectDtIncio = document.getElementById("teste3");
    var selectTerminio = document.getElementById("teste4");
    var selectInvestimento = document.getElementById("teste5");

    var optionAnuncio = document.createElement("option");
    var optionCliente = document.createElement("option");
    var optionDtIncio = document.createElement("option");
    var optionDtTermino = document.createElement("option");
    var optionDtInvestimo = document.createElement("option");

    optionAnuncio.innerHTML = document.getElementById("campo-anuncio").value;
    optionCliente.innerHTML = document.getElementById("campo-cliente").value;
    optionDtIncio.innerHTML = document.getElementById("campo-dt-inicio").value;
    optionDtTermino.innerHTML = document.getElementById("campo-dt-termino").value;
    optionDtInvestimo.innerHTML = document.getElementById("campo-investimento").value;

}

//função da calculadora
function calc(e){

var valorIvestido = document.getElementById('valorIvestido');   
var respVisualizacaoTotal = document.getElementById('respVisualizacaoTotal');
var respVisualizacao = document.getElementById('respVisualizacao');
var respCalculoCompartilhamento = document.getElementById('respCalculoCompartilhamento');
var respVisualizacaoCompartilhamento = document.getElementById('respVisualizacaoCompartilhamento');
var respCalculoCliques = document.getElementById('respCalculoCliques');

var taxaCliques = 0.12;
var taxaCompartilhamento = 0.15;
var taxaVisualizacaoCompartilhamento = 40;
var visualizacao = 30;
var compartilhamento = 4;

var vCont;

// contabiliza automaticamente a cada clique no botão investir 
var n1=parseFloat(document.getElementById("n1").value);
vCont = n1 + 1;
document.getElementById('n1').value = vCont;  

var calculoVisualizacao = parseFloat(n1*visualizacao);
var calculoCliques = parseFloat(calculoVisualizacao*taxaCliques);
var calculoCompartilhamento = parseFloat(calculoCliques*taxaCompartilhamento)
var calculoVisualizacaoCompartilhamento = parseFloat(calculoCompartilhamento*taxaVisualizacaoCompartilhamento*4);
var visualizacaoTotal = parseFloat(calculoVisualizacao+calculoVisualizacaoCompartilhamento)

// Faz os calculos de cada campo
if(!isNaN(n1)){
  valorIvestido.innerHTML = vCont;
}

if(!isNaN(visualizacaoTotal)){
respVisualizacaoTotal.innerHTML = visualizacaoTotal;
}

if(!isNaN(calculoCompartilhamento)){
respCalculoCompartilhamento.innerHTML = calculoCompartilhamento;
}

if(!isNaN(calculoCliques)){
respCalculoCliques.innerHTML = calculoCliques;
}

}
