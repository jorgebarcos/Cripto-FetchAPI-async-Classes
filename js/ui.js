class Interfaz {
	constructor() {
		this.init();
	}
	init() {
		this.construirSelect();
	}

	construirSelect() {
		cotizador.obtenerMonedasAPI().then((monedas) => {
			// Crear un select de opciones
			const select = document.querySelector('#criptomoneda');
			// iterar por los resultados de la api
			for (const [ key, value ] of Object.entries(monedas.monedas.Data)) {
				// Añadir el Symbol y el Nombre como opciones
				const opcion = document.createElement('option');
				opcion.value = value.Symbol;
				opcion.appendChild(document.createTextNode(value.CoinName));
				select.appendChild(opcion);
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

	// Imprime el resultado e la cotización
	mostrarResultado(resultado, moneda, crypto) {
		// En caso de un resultado anterior, ocultarlo
		const resultadoAnterior = document.querySelector('#resultado > div');

		if (resultadoAnterior) {
			resultadoAnterior.remove();
		}

		const datosMoneda = resultado[crypto][moneda];

		// recotar digitos de precio
		let precio = datosMoneda.PRICE.toFixed(2),
			porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
			actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');

		// Construir el template
		let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p> El Precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p>Variación último día: % ${porcentaje}</p>
                    <p>Última Actualización: ${actualizado}</p>
                </div>
            </div>
        `;
		this.mostrarOcultarSpinner('block');

		setTimeout(() => {
			//insertar el resultado
			document.querySelector('#resultado').innerHTML = templateHTML;

			// Ocultar el spinner
			this.mostrarOcultarSpinner('none');
		}, 3000);
	}
	// Mostrar un spinner de carga al enviar la cotización
	mostrarOcultarSpinner(vista) {
		const spinner = document.querySelector('.contenido-spinner');
		spinner.style.display = vista;
	}
}
