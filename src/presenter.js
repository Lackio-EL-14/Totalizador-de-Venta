import totalizador from "./totalizador.js";

document.getElementById('calcular').addEventListener('click', () => {
  const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  const precio = parseFloat(document.getElementById('precio').value);

  const resultado = totalizador(cantidad, precio);

  document.getElementById('resultado').innerText =
    `Cantidad: ${resultado.cantidad}, Precio: ${resultado.precio}`;
});