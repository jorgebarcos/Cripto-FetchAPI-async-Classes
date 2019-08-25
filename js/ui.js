class Interfaz {
	constructor() {
		this.init();
	}
	init() {
		this.construirSelect();
	}

	construirSelect() {
		cotizador.obtenerMonedasAPI().then((monedas) => {
			for (const [ key, value ] of Object.entries(monedas.monedas.Data)) {
				console.log(key);
			}
		});
	}

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
