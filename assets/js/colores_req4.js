const bloque = (color) => {
    const agregar = document.querySelector(".boxs-colors")
    const añadir = document.createElement("div")
    añadir.style.width = "200px"
    añadir.style.height = "200px"
    añadir.style.backgroundColor = color
    agregar.appendChild(añadir)
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        bloque ("pink")
    } else if (event.key === 'w') {
        bloque ("grey")
    }
    else if (event.key === 'e') {
        bloque ("brown")
    }
    else if (event.key === 'a') {
        cuadrado.style.backgroundColor = ("pink")
    }
    else if (event.key === 's') {
        cuadrado.style.backgroundColor = ("orange")
    }
    else if (event.key === 'd') {
        cuadrado.style.backgroundColor = ("lightblue")
    }
})

const cuadrado = document.querySelector("#key")

const colorearCaja = document.querySelector(".boxs-colors")
    colorearCaja.addEventListener("click", function (event){
        if ((event.target.classList.contains('caja')) === true){
            event.target.classList.toggle("black")
        }
    })