const menu = document.querySelector('.menu');
const conteudo = document.querySelector('.conteudo');
const selecionar = document.querySelectorAll('.textSeleciona');
const botao = document.getElementById('botao');
const imgLogo = document.getElementById('imgLogo');
const addTarefa = document.getElementById('inputTarefa');
const btn = document.getElementById('btnTarefa');
const div = document.getElementById('containerListaTarefas');
const date = document.getElementById('diaTarefa');
const time = document.getElementById('horarioTarefa');
const divTempo = document.getElementById('selecionahorario');
const inputTarefa = document.getElementById('criaTarefa');
const btnRemove = document.getElementById('botaoCancela');
var id = 0;

// Animação do menu

function mostra() {
    menu.classList?.toggle('mostrarBarra');
    for(idx in selecionar) {
        selecionar[idx].classList?.toggle('mostrarSelecao');
    }
    botao.classList?.toggle('girarBotao');
    imgLogo.classList?.toggle('mostraLogo');
    if(menu.classList?.contains('mostrarBarra')) {
        console.log(menu.classList?.contains('mostrarBarra'))
        menu.classList?.
        menu.classList?.add('ocultarBarra');
    }
}

// Primeiro Script: Criando uma To-doList

function sair() {
    setTimeout (() => {
        window.location.href = 'casa.html';
    }, 400)
    menu.classList?.add('goOut');
}

btnTarefa.addEventListener("click", (e) => {
    id += 1;
    console.log(time.value.length);
    console.log(date.value.length);
    if(addTarefa.value === "" || date.value.length === 0 || time.value.length === 0 ){
        return alert("Você digitou um valor inválido")
    } else {
        const tarefa = {
            desc: addTarefa.value,
            time: time.value,
            date: date.value,
            id
        }
        adicionarTarefa(tarefa);
    }
})

function adicionarTarefa(tarefa) {
    let li = criaTagLi(tarefa);
    let span = criarSpan(tarefa);
    let btnRemove = btnRemoveItem(tarefa);
    let alterarTarefa= btnAlteraTarefa(tarefa);
    let descript = criarElementoDesc(tarefa);
    let divEstilo = criarDivStyle();
    let divBotoes = criarDivBotoes();
    addTarefa.value = "";
    date.value = "";
    time.value = "";
    div.appendChild(li)
    li.appendChild(divBotoes);
    li.appendChild(divEstilo);
    divEstilo.appendChild(descript);    
    li.appendChild(span);
    divBotoes.appendChild(btnRemove);
    divBotoes.appendChild(alterarTarefa);
}

function criarDivStyle() {
    let divEstilo = document.createElement('div');
    divEstilo.classList.add('divEstilo')
    return divEstilo;
}

function criarDivBotoes() {
    let divBotoes = document.createElement('div');
    divBotoes.classList.add('divBotoes');
    return divBotoes;
}

function criarElementoDesc(tarefa){
    let descTarefa = document.createElement('p');
    descTarefa.innerHTML = tarefa.desc;
    descTarefa.classList.add("descTarefa")
    return descTarefa
}

function criaTagLi(tarefa){
    let li = document.createElement('li');
    li.id = tarefa.id;
    li.classList.add('listaTarefa');
    return li;
}

function criarSpan(tarefa){
    let span = document.createElement("span");
    span.classList?.add("span");
    span.innerHTML += `Horário: ${tarefa.time} |`;
    span.innerHTML += ` Data: ${tarefa.date.split("-").reverse().join("/")}`;
    return span;
}

function btnRemoveItem(tarefa) {
    let remove = document.createElement("button");
    remove.innerHTML = `<i class="fa-solid fa-minus" id="botaoCancela"><i>`
    remove.classList?.add("buttonRemove");
    remove.setAttribute('onclick', 'removeParcial('+tarefa.id+')');
    return remove;
}

function btnAlteraTarefa(tarefa){
    let altera = document.createElement("button");
    altera.innerHTML = `<i class="fa-solid fa-pen" id="botaoCancela"><i>`
    altera.classList?.add("buttonAtera");
    altera.setAttribute('onclick', 'altera('+tarefa.desc+')');
    return altera;
}

function removeParcial(tarefa) {
    let confirmacao = window.confirm(`Excluir tarefa ${tarefa}?`);
    if(confirmacao){
        let li = document.getElementById(''+tarefa+'');
        if(li){
            div.removeChild(li);
        }
        else {
            alert('Não tem elementos')
        }
    }
}

function limparTodas() {
    let confirmacao = window.confirm(`Excluir todas as tarefas?`);
    if(confirmacao){
        const div = document.getElementById('containerListaTarefas');
        div.innerHTML = '';
    }
}

addTarefa.addEventListener("focus", mostraTempo)
addTarefa.addEventListener("focus", empurra)

function mostraTempo() {   1
    setTimeout(() =>{
        divTempo.style.opacity = "100%";
    },500);
    divTempo.style.display = 'flex'
}

function empurra() {
    inputTarefa.style.marginTop = "20px"
    inputTarefa.style.marginBottom= "0px"
}

function voltar(){
    setTimeout (() => {
        window.location.href = 'index.html';
    }, 400)
    menu.classList?.add('goOut');
}

