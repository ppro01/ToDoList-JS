const posicao = document.querySelector(".Items");
const Info = document.querySelector("#task");
const button = document.querySelector(".add");

button.addEventListener("click", function () {
  var task = createTask();
  addTask(task);
  clearInput();
});
Info.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    var task = createTask();
    addTask(task);
    clearInput();
  } else {
    return null;
  }
});

function createTask() {
  const createdTask = document.createElement("div");
  createdTask.classList.add("Item1");

  const conteudo = document.createElement("p");
  conteudo.innerText = Info.value;
  createdTask.appendChild(conteudo);

  const separador = document.createElement("div");

  const btnExcluir = document.createElement("button");
  btnExcluir.innerHTML = '<i class="bx bxs-trash"></i>';
  btnExcluir.classList.add("editar");
  separador.appendChild(btnExcluir);

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = '<i class="bx bxs-pencil"></i>';
  btnEdit.classList.add("editar");
  separador.appendChild(btnEdit);

  createdTask.appendChild(separador);

  createdTask.addEventListener("click", (e) => {
    let createdTaskTarget = e.target;
    if (createdTaskTarget.classList.contains("Feito")) {
      createdTaskTarget.classList.remove("Feito");
    } else {
      createdTaskTarget.classList.add("Feito");
    }
  });

  btnExcluir.addEventListener(
    "click",
    function () {
      posicao.removeChild(createdTask);
    }.bind(createdTask)
  );

  btnEdit.addEventListener("click", (e) => {
    let targetINNER = e.target;
    let divClosest = targetINNER.closest("div");
    let itemClosest = divClosest.closest(".Item1");
    itemClosest.classList.add("editando");
    let pClosest = document.querySelector(".editando > p");
    let teste = prompt("Digita a nova tarefa:");

    if (teste) {
      pClosest.innerText = teste;
      itemClosest.classList.remove("editando");
    } else {
      itemClosest.classList.remove("editando");
    }
  });
  return createdTask;
}

function addTask(task) {
  posicao.appendChild(task);
}

function clearInput() {
  Info.value = "";
}
