const container = document.querySelector(".container"),
  button = document.getElementById("change-grid");

function addElements(number) {
  let gridCell = 400 / number - 2;
  let gridSize = Math.pow(number, 2);

  Array.from(Array(gridSize).keys()).map(() => {
    let divElement = document.createElement("div");
    container.appendChild(divElement);
    divElement.classList.add("grid");
    divElement.style.height = `${gridCell}px`;
    divElement.style.width = `${gridCell}px`;
  });

  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) =>
    grid.addEventListener(
      "mouseenter",
      () => {
        grid.style.backgroundColor = "#ff9999";
        setInterval(() => { grid.style.backgroundColor = "#FF7D00"}, 2000);
      }
    )
  );
}

function ChangeGrid() {
  let reqGridSize = prompt("How many squares per side?") || 16;
  if (reqGridSize >= 1 && reqGridSize <= 50) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    addElements(reqGridSize);
  } else {
    alert("Choose a number between 1 - 50");
    ChangeGrid();
  }
}

button.addEventListener("click", ChangeGrid);