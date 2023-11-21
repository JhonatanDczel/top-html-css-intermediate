document.documentElement.className = 'oscuro';
function actualizar() {
  const root = document.documentElement;
  const nuevoTema = root.className === 'oscuro' ? 'claro' : 'oscuro';
  root.className = nuevoTema;
  document.querySelector('.tema-nombre').textContent = nuevoTema;
}
document.querySelector('.tema-boton').addEventListener('click', actualizar);
