const juegos = [
    { nombre: "FIFA 25", categoria: "accion" },
    { nombre: "Call of Duty", categoria: "accion" },
    { nombre: "GTA V", categoria: "accion" },
    { nombre: "Minecraft", categoria: "otros" },
    { nombre: "Roblox", categoria: "otros" },
    { nombre: "The Sims", categoria: "otros" },
    { nombre: "PUB", categoria: "shooter" }
];

const contenedor = document.getElementById("contenedor");

function mostrar(lista) {

    contenedor.innerHTML = "";

    lista.forEach(juego => {

        contenedor.innerHTML += `
            <div class="caja">
                ${juego.nombre}
            </div>
        `;

    });

}

mostrar(juegos);

document.getElementById("btnTodos")
.addEventListener("click", () => {

    mostrar(juegos);

});

document.getElementById("btnAccion")
.addEventListener("click", () => {

    const accion = juegos.filter(juego =>
        juego.categoria === "accion"
    );

    mostrar(accion);

});