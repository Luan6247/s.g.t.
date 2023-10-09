const container = document.getElementsByTagName('div')[0]
const inputAtividade = document.getElementById("input-atividade");
const dateInput = document.getElementById("input-date");
const buttonAdd = document.getElementById("button-submit");
const searchButton = document.getElementById("input-buscar");


const addCard = () => {
  const div = document.createElement("div");
  const p = document.createElement('p');
  const pDate = document.createElement('p')
  const editButton = document.createElement('button');
  const removeButton = document.createElement("button");
  const concludeButton = document.createElement("button");

  div.classList.add('card');
  editButton.classList.add("edit-button");
  removeButton.classList.add("remove-button");
  concludeButton.classList.add("conclude-button");

  editButton.innerText= 'Editar';
  removeButton.innerText= 'Remover';
  concludeButton.innerText = 'Concluir';

  

  p.innerText= `${inputAtividade.value}`;
  pDate.innerText = `${dateInput.value}`;

  div.appendChild(p);
  div.appendChild(pDate)
  div.appendChild(editButton);
  div.appendChild(removeButton);
  div.appendChild(concludeButton);

  container.appendChild(div);

  inputAtividade.value = '';
  dateInput.value = '';

  inputAtividade.focus()

}


const verifyInput = () => {
  if (inputAtividade.value == '' || dateInput.value == ""){
    window.alert("Dados inválidos")
  } else{
    addCard()
  }
}


buttonAdd.addEventListener("click", verifyInput);

document.addEventListener("click", (e) => {
  const targetEl = e.target;

  const parentEl = targetEl.closest('div');

  if (targetEl.classList.contains('conclude-button')){
    parentEl.classList.toggle('done')
  } 

  if (targetEl.classList.contains("remove-button")){
    parentEl.remove();
  }
})