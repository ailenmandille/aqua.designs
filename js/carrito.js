const servicios = [
  { id: 1, nombre: "Diseño de Logo", precio: 5000 },
  { id: 2, nombre: "Rediseño de Marca", precio: 7000 },
  { id: 3, nombre: "Diseño de Currículum", precio: 3000 },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listaServicios = document.getElementById("lista-servicios");

servicios.forEach(servicio => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${servicio.nombre}</h3>
    <p>Precio: $${servicio.precio}</p>
    <button onclick="agregarAlCarrito(${servicio.id})">Agregar al carrito</button>
  `;
  listaServicios.appendChild(div);
});

function abrirCarrito() {
  document.getElementById("carrito-lateral").classList.add("abierto");
  renderCarrito();
}

function cerrarCarrito() {
  document.getElementById("carrito-lateral").classList.remove("abierto");
}

function agregarAlCarrito(id) {
  const servicio = servicios.find(s => s.id === id);
  carrito.push(servicio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  renderCarrito();
}

function renderCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");
  const contador = document.getElementById("contador-carrito");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach(servicio => {
    const li = document.createElement("li");
    li.textContent = `${servicio.nombre} - $${servicio.precio}`;
    lista.appendChild(li);
    total += servicio.precio;
  });

  totalSpan.textContent = total;
  contador.textContent = `$${total}`;

}

renderCarrito();
