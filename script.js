let n = 25 // size of etch-a-sketch
const container = document.getElementById("container")
const button = document.getElementById("button")

function fillContainer(n) {
    container.style.setProperty("grid-template-columns", `repeat(${n}, 1fr)`)
    //container.setAttribute("grid-template-rows", `repeat(${n}, 1fr)`)
    for (let i = 0; i < n * n; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
        square.addEventListener("mouseenter", function () {
        square.classList.add("hovered")
    })
    }

}

function changeGrid() {
    container.innerHTML = '';
    do {
        n = parseInt(prompt("enter the size of a grid (from 1 to 100)"))
    } while(n>100 || n <1)

    fillContainer(n)
}

fillContainer(n)


button.addEventListener("click", changeGrid)





