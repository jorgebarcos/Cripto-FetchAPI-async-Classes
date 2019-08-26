const cotizador = new API('a2ffd5089da922030c971ad8f79d7d1039839168a063bea5e25be83152004aea');

const ui = new Interfaz();

// Leer el formulario

const formulario = document.querySelector('#formulario');
// eventlisteners
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	// Leer la moneda seleccionada
	const monedaSelect = document.querySelector('#moneda');
	const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

	// Leer la criptomoneda seleccionada
	const criptoMonedaSelect = document.querySelector('#criptomoneda');
	const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

	// Comprobar que ambos campos tengan algo seleccionado
	if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
		// arrojar una alerta de error
		ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
	} else {
		// todo bien, consultar la api
		cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada).then((data) => {
			console.log(data);
		});
	}
});
