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
	} else {
		// todo bien, consultar la api
	}
});
