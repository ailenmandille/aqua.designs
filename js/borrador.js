// Lista de servicios que vas a vender
const servicios = [
  { id: 1, nombre: "Diseño de Logo", precio: 5000 },
  { id: 2, nombre: "Rediseño de Marca", precio: 7000 },
  { id: 3, nombre: "Diseño de Currículum", precio: 3000 },
  { id: 4, nombre: "Diseño de Banner", precio: 8000}
];

// Cargar el carrito desde localStorage o crear uno nuevo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar servicios en la web
const contenedor = document.getElementById("lista-servicios");

servicios.forEach(servicio => {
  const div = document.createElement("div");
  div.classList.add("item_flex"); // usás esta clase en tu HTML
  div.innerHTML = `
    <h3>${servicio.nombre}</h3>
    <p>Precio: $${servicio.precio}</p>
    <button onclick="agregarAlCarrito(${servicio.id})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});

// Función para agregar al carrito
function agregarAlCarrito(id) {
  const servicio = servicios.find(s => s.id === id);
  carrito.push(servicio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

// Mostrar carrito en pantalla
function renderCarrito() {
  const lista = document.getElementById("carrito");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    lista.appendChild(li);
    total += item.precio;
  });

  totalSpan.textContent = total;
}

// Eliminar un item del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

// Ejecutar al cargar
renderCarrito();