
function funcChange(elemento) {
    console.log(elemento.value)
}

function load(){
    alert("Página carregada");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function redirecionar() {
    //window.open("http://www.google.com");
    window.location.href = "http://www.google.com";

}

function clicou() {
    document.getElementById("thank").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log ( document.getElementById("thank"));
    //alert("obrigado por clicar");
}



/*function soma(n1, n2) {
    return n1+n2;
}

function validaidade(idade){
    var validar; 
    if(idade>=18){
       validar =  true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade?");
console.log(validaidade(idade));*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome,novo_nome);
}
alert(setReplace("Vai Japão","Japão","Brasil"));

alert(soma(5,10));*/

/* Date */

//var d = new Date;

//alert(d);
//alert(d.getMonth() + 1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());



/* CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE */

/*var idade = prompt("Qual é sua idade?");
if( idade < 18){
    alert("menor de idade");
} else {
    alert("maior de idade")
};*/


/*var count = 0;
while (count <=5) {
    console.log(count);
    alert(count);
    count++;
    //count = count+1;
};*/

/*var cont;
for( cont=0;cont<=5;cont++){
    console.log(cont);
    alert(cont);
};*/

/* ARRAYS E DICIONÁRIO*/

//var fruta = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}] 
//console.log(fruta);
//console.log(fruta.cor);
//alert(fruta[1].cor);
//alert(fruta.nome);







//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



/* INTRODUÇÃO */

//alert(lista[1]);


/*
var nome = "Weslen Paes";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase())
//console.log(frase.toLowerCase()) */