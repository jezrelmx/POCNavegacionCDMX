function abrirVentana() {
	var miSiguienteVentana = Widget.createWidget('mx.cdmx.widgetAGUMovil', 'widgetAGUMovilSiguienteVentana').getView();
	if (OS_IOS) {
		var pantallaPrincipal = Alloy.createController("index").getView();
		var aux = ((pantallaPrincipal.tabs)[0]);
		aux.open(miSiguienteVentana);	
	};
	if (OS_ANDROID) {
		miSiguienteVentana.open();
	};
	
	console.log('Se abrira ventana');
}
