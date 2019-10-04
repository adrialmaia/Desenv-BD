var nome = "";
var sobrenome = "";
var numero = 1.3; 
var booleana = true / false;


//para criar comentarios

    para comentar um bloco
                                                   
                           
                           
    Nome = "Adriano";
    Sobrenome = "Maia";

    var nome_completo = nome + sobrenome;

    alert("nome_completo");
    
    
    comparação: 
    <, <=, >, >=, ==, !=

    logicos:
    
    &&, ||, ! //and, or, not

    //Estrutura de Seleção "if" "else"
    if (expressão logica){
            comandos;
    } 
    
    //exemplo
    if (2=3 == 5 || 8*3>1){
        alert("Verdadeiro");
    }
    else {
        alert ("false");
    }
     
    //Estrutura de repetição "while"
    while (expressão){
            comandos;
    }

    //exemplo
    var cont=1;
    while (cont <=5){
        alert("cont");
        cont = cont + 1; //ou então como abaixo
        cont++; /*incremeto*/ cont--; /*decremento*/
    }

    //Estrutura de repetição "do" "while", valida antes do while
    do{
            validação;

    }while(cont >5);

    //Estrutura "for"
    for (var i=0; i<=5; i++){
            comandos;
    }

    //exemplo
    for(var i=0; i<=5; i++){
            alert(i);
    }


    //Estrutura de Função
    function nome (){
            comandos;
    }

    //exemplo
    function somar(){
        alert(5 + 3);
    }
    somar();
    
    //exemplo
    function somar(n1,n2){
        alert(n1 + n2);
    }
    somar(5, 3);
    
    //exemplo
    function somar(n1,n2){
        return n1 + n2;
    }
    var resultado=somar(5,3);
    alert(resultado);


    //Estrutura document.write
    function somar(){
        var cont=1;
        while ( cont <= 5){
            document.write(cont + "</br>")
            cont++;
        }
    }

alert ("Aula de JavaScript");



/*Exercicio
Função tabuada
imprimir no documento a tabuada do 5
seguinte padrão:

5x1 = 5
5x2 = 10
...
5x10 = 50*/

function tabuada (){
    for (var i=0; i<=10; i++)
        var = i * 5;

    document.write(cont * "</br>")

}

//CORREÇÃO
function tabuada(){    //usando while
    var cont = 1;
    while(cont <=10){
        document.write("5 x" + " =" 5*cont + "</br>");
        cont++;
    }
}

function tabuada (){   //usando for
    for (var i=0; i<=10; i++){
    document.write("5 x" + i +" =" 5*i + "</br>");
    }
