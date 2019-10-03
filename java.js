var nome = "";
var sobrenome = "";
var numero = 1.3; 
var booleana = true / false;


//para criar comentarios
/*
    para comentar um bloco
                            */                        
                           
                           
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
    


alert ("Aula de JavaScript");
