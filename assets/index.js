const newCell = (cell) => {
  const containerCell = document.getElementById("container-tombola");

  for (let i = 1; i < cell; i++) {
    const cellDiv = document.createElement("div"); //sto creando il div
    cellDiv.className = "cella";

    const cellH3 = document.createElement("h3");
    cellH3.innerText = i;

    cellDiv.appendChild(cellH3);
    containerCell.appendChild(cellDiv);
  }
};

newCell(77);

const button = document.getElementById("button1");
button.onclick = function () {
  const cells = document.querySelectorAll(".cella");
  const randomNum = Math.floor(Math.random() * cells.length);
  const randomCell = cells[randomNum];
  //   const newNum = randomCell; test
  console.log(randomCell);
  randomCell.style.backgroundColor = "red";
};

const button2 = domcument.getElementById("button2");
button2.onclick = function () {
  const tableContainer = document.getElementById("tablecontainer");
  const newDiv = document.createElement("div");
  newDiv.className = "playertablediv";
  const newH3 = document.createElement("h3");
  newH3.innerText = i;
  newDiv.appendChild(newH3);
  tableContainer.appendChild(newDiv);
};
