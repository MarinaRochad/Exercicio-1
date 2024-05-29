document.body.innerHTML = '<h1 id="titulo">Titulo legal</h1>';

let titulo = document.getElementById("titulo");

titulo.style.fontFamily = "Segoe UI";
titulo.style.color = "red";

//selecione o elemento com ID "titulo" do documento (document)
let titulo = window.document.getElementById("titulo");

//define a cor do texto do elemento "titulo"
titulo.style.color = "#002596";

//define atipografia do elemento 
titulo.style.fontFamily = "Montserrat";

//inicialia uma variavel 
let clique= 0;

//fun;'ao para contagem de cliques 
const somarCliques = () => {

    //incrementou 1 valor da variavel
    Clique++

    //Seleciona o botao por querSelector e atualiza a quantidade de cliques no HTML
    document.querySelector("#botao").innerHTML = clique
}

const adicionarItem = () => {
    //Criar um novo elemento li(item da lista)
    let novoItem = document.createElement("li");
    //Define o texto do no item
    novoItem.textContent = "Novo Item";
    //Identifica o elemento que vai ser adicionado
    let lista = document.getElementById("minhaLista");
    //Adiciona um novo item a lista
    lista.appendChild(novoItem);
}

const voltarPagina = () =>{
    window.history.back()
}

const fecharPagina = () => {
    window.close()
}



