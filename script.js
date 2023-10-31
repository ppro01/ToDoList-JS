let index = 0;
function Add() {
  index++;
  const Info = document.querySelector("#task");

  const Filho = document.createElement("div");
  Filho.classList.add("Item1");

  const conteudo = document.createElement("p");
  conteudo.innerText = Info.value;
  Filho.appendChild(conteudo);

  const separador = document.createElement("div");

  const btnExcluir = document.createElement("button");
  btnExcluir.innerHTML = '<i class="bx bxs-trash"></i>';
  btnExcluir.classList.add("editar");
  separador.appendChild(btnExcluir);

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = '<i class="bx bxs-pencil"></i>';
  btnEdit.classList.add("editar");
  separador.appendChild(btnEdit);

  Filho.appendChild(separador);

  const posicao = document.querySelector(".Items");
  posicao.appendChild(Filho);
  Info.value = "";

  Filho.addEventListener("click", (e) => {
    let Filhotarget = e.target;
    if (Filhotarget.classList.contains("Feito")) {
      Filhotarget.classList.remove("Feito");
    } else {
      Filhotarget.classList.add("Feito");
    }
  });

  btnExcluir.addEventListener(
    "click",
    function () {
      posicao.removeChild(Filho);
    }.bind(Filho)
  );

  btnEdit.addEventListener("click", (e) => {
    let targetINNER = e.target;
    let divClosest = targetINNER.closest("div");
    let itemClosest = divClosest.closest(".Item1");
    itemClosest.classList.add("editando");
    let pClosest = document.querySelector(".editando > p");
    let teste = prompt("Digita alguma porra ai");

    if (teste) {
      pClosest.innerText = teste;
      itemClosest.classList.remove("editando");
    } else {
      itemClosest.classList.remove("editando");
    }
  });
}
