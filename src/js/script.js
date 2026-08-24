const columns = document.querySelectorAll(".column_cards");
const cards = document.querySelectorAll(".cards");

/* Card arrastado */
let draggedCard;

//Inicio do arasto!
const dragStart = (event) => {
  /* event = "Mostra o evento em si" */
  /* event.target = "Mostra o elemento exato onde o evento aconteceu" */
  draggedCard = event.target;
  event.dataTransfer.effectAllowed = "move"; //Transforma o cursor em um item de transferência
};

//Enquanto arrastado sobre (ele vai piscando)!
const dragOver = (event) => {
  event.preventDefault(); // Remove o comportamento padrão, do icone de bloqueio
};

const dragEnter = (event) => {
  const elm = event.target;
  if (!elm.classList.contains("column_cards")) {
    return;
  }

  elm.classList.add("column_highlight");
};

const dragLeave = (event) => {
  const elm = event.target;
  elm.classList.remove("column_highlight");
};

const dragDrop = (event) => {
  const elm = event.target;

  if (elm.classList.contains("column_cards")) {
    elm.classList.remove("column_highlight");
    
    elm.appendChild(draggedCard);
    // createTask(elm);
  }
};

//VOU DEIXAR A BURRICE AQUI PRA NÃO ESQUECER...

// function createTask(column) {
//   const task = document.createElement("section");
//   task.classList.add("cards");
//   task.innerText = draggedCard.textContent;
//   task.draggable = "true";
//   column.appendChild(task);
//   draggedCard.remove();
//   draggedCard = task;
//   console.log();
// }

/* Adiciona em todos os cards, a escuta o inicio do arrasto */
cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
});

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  //   column.addEventListener("dragend", dragEnd);
  column.addEventListener("drop", dragDrop);
});
