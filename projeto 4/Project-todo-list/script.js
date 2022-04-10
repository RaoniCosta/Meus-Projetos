const criarLista = document.querySelector ("ol");
const inputLista = document.querySelector('input');
const botaoAdicionar = document.querySelector('button');
const tasks = []
const botaoApagar = document.querySelector('apaga-tudo');

function minhasTarefas () {
    criarLista.innerHTML=""
    for (task of tasks) {
        const elementoTarefa = document.createElement('li')
        const texto = document.createTextNode (task)

        elementoTarefa.appendChild(texto)
        criarLista.appendChild(elementoTarefa)

    }
}
minhasTarefas()

function adicionaTarefas () {
    const texto = inputLista.value 
    tasks.push(texto) 
    inputLista.value = "" 

    
        minhasTarefas() 
    }
   
function fundoCinza () {
    const li = document.querySelector('li').style.backgroundColor="gray"

}

function apagaTudo() { 

    const apagaElementos = document.querySelector('#lista-tarefas' ) 
    while(apagaElementos.firstChild) {
        apagaElementos.firstChild.remove();
    }
}

// requisito 9: referência - https://www.w3schools.com/howto/howto_js_todolist.asp


          const riscarTexto = document.querySelector('ol')
          riscarTexto.addEventListener("dblclick" , function (evento){
            if(evento.target.tagName==="LI") {
                evento.target.classList.toggle("completed")
            }
          }, false  );
        