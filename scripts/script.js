const etchContainer = document.getElementById("main-grid-container");

let startGrid = 16;

etchContainer.style.setProperty("--grid-columns", startGrid);
let cellSize = (etchContainer.clientWidth/startGrid);

etchContainer.style.setProperty("--cell-dim", `${cellSize}px`);

const button = document.querySelector(".buttons");
button.addEventListener("click", () => {
    changeSizeOfGrid()
})

for(let i=0;i<startGrid*startGrid;i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.setProperty("--cell-dim", `${cellSize}px`);
    etchContainer.appendChild(cell);
}

function changeSizeOfGrid(){
    let userRequestedSize;
    do{
        userRequestedSize = prompt("Please enter the size of the new grid must be 100 or less");
    } while(userRequestedSize>100);
    
    if(userRequestedSize<=100){
        while(etchContainer.firstChild){
            etchContainer.removeChild(etchContainer.lastChild);
        }
        cellSize = (etchContainer.clientWidth/userRequestedSize);
        etchContainer.style.setProperty("--grid-columns", userRequestedSize);
        etchContainer.style.setProperty("--cell-dim", `${cellSize}px`);
        for(let i=0;i<userRequestedSize*userRequestedSize;i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.setProperty("--cell-dim", `${cellSize}px`);
            etchContainer.appendChild(cell);
        };
        const cellArray = document.querySelectorAll(".cell");
        cellArray.forEach(cell => {
         cell.addEventListener("mouseover", e => {
        e.target.classList.add("cell-color");
    })
});
    }
}

const cellArray = document.querySelectorAll(".cell");
cellArray.forEach(cell => {
    cell.addEventListener("mouseover", e => {
        e.target.classList.add("cell-color");
    })
});