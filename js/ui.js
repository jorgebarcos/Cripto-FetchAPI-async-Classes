class Interfaz {
	mostrarMensaje(mensaje, clases) {
		const div = document.createElement('div');
		div.className = clases;
		div.appendChild(document.createTextNode(mensaje));

		// Seleccionar mensajes
		const divMensaje = document.querySelector('.mensajes');
		divMensaje.appendChild(div);
		// Mostrar contendio

		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3000);
	}
}
