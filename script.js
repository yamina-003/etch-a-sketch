const container = document.querySelector(".container")


function createGrid(n){

    const containerWidth = container.clientWidth;
    const gap = 8;
    const availabeSpace = containerWidth - (n -1)* gap;
    const flexBasis = availabeSpace / n;

    for ( i = 0; i < n * n; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.flex = ` 1 1 ${flexBasis}px`;
            container.appendChild(square);
        }

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseenter", ()=> square.style.backgroundColor = "white"));

}

createGrid(16);









