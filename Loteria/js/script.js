var num = 1;

var tabela = document.createElement("table");
tabela.align = "center";
tabela.className = "tabela";
document.body.appendChild(tabela);

for(var i = 0; i < 6; i++){
    var tr = document.createElement("tr");

    for(var j = 0; j < 10; j++){
        var td = document.createElement("td");
        td.className = "number";

        td.innerHTML = num;
        tr.appendChild(td);
        tabela.appendChild(tr);
        num++;
    }
}

let numero = document.getElementsByClassName("number");
let numsEscolhidos = [];

var textoNums = document.createElement("p");
textoNums.className = "nums";
textoNums.innerHTML = "Escolhidos:"
document.body.appendChild(textoNums);

var btnResults = document.createElement("button");
btnResults.innerText = "Ver Resultados";
btnResults.className = "btn";
document.body.appendChild(btnResults);


for(let k = 0; k < numero.length; k++){
    numero[k].onclick = function(){
        if(numsEscolhidos.length < 6){
            numsEscolhidos.push(numero[k].innerHTML);
            textoNums.innerText = numsEscolhidos.sort(function(a, b){return a - b});
        }
    }
}

var resultado = document.createElement("p");
resultado.innerHTML = "Resultado:"
document.body.appendChild(resultado);

var Resultados = [];

btnResults.onclick = function(){
    Resultados = [];
    for(var l = 0; l < 6; l++){
        let random = parseInt(Math.random() * 61);
    
        while(random == 0){
            random = parseInt(Math.random() * 61);
        }

        Resultados.push(random);
    }

    
    resultado.innerHTML = Resultados.sort(function(a, b){return a - b});
}