const meriendas = [
    "Café con medialunas",
    "Té con galletas",
    "Chocolate caliente",
    "Mate con bizcochos",
    "Jugo con tostadas"
];

const contenedor = document.getElementById("contenedorMeriendas");

meriendas.forEach(merienda => {

    contenedor.innerHTML += `
        <div class="caja">
            ${merienda}
        </div>
    `;

});

document.getElementById("btnCantidad")
.addEventListener("click", () => {

    document.getElementById("resultado").textContent =
        `Hay ${meriendas.length} meriendas disponibles`;

});