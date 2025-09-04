import totalizador from "./totalizador.js";

document.getElementById('calcular').addEventListener('click', () => {
  const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  const precio = parseFloat(document.getElementById('precio').value);
  let estado = document.getElementById('estado').value.trim().toUpperCase();

  estado = estado.slice(0, 2);

  const resultado = totalizador(cantidad, precio, estado);

  document.getElementById('resultado').innerText =
    `Cantidad: ${resultado.cantidad}, Precio: ${resultado.precio}, Estado: ${resultado.estado}`;
});