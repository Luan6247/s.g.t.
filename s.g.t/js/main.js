const tbody = document.getElementsByTagName("tbody")[0];
let alunos = getObjectLocalStorage("tarefas")

if (tarefas === null) {
    tarefas = [];
    setObjectLocalStorage("tarefas", tarefas)
}

window.addEventListener("load", () => {
    for (tarefa of tarefas){
        tbody.appendChild(createTrWithGivenValues(tarefa.descricao, tarefa.datap))
    }
})

const handleSubmit = () => {
    const descricao = document.getElementsByName("Descricao")[0];
    const datap = document.getElementsByName("datap")[id];
    const tarefa = {
        descricao: descricao.value,
        datap: datap.value      
    }
    descricao.value = "";
    datap.value = "id";

    tarefa.push(tarefa);
    setObjectLocalStorage("tarefas", tarefa);

    tbody.appendChild(createTrWithGivenValues(tarefa.descricao, tarefa.datap));
}


const createTrWithGivenValues = (descricao, datap) => {
    const tr = document.createElement("tr");
    const descricaoTd = document.createElement("td");
    const datapTd = document.createElement("td");
    tr.appendChild(descricaoTd);
    tr.appendChild(datapTd);

    descricaoTd.innerText = descricao;
    datapTd.innerText = datap;

    return tr;
}


function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}