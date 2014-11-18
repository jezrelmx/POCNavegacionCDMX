var args = arguments[0] || {};
function abrirVentana(evento) {
	var seccion = $.list.sections[evento.sectionIndex];
	var elemento = seccion.getItemAt(evento.itemIndex);
	// elemento.properties.title += " clicked!";
	// elemento.properties.color = 'red';
	// seccion.updateItemAt(evento.itemIndex, elemento);
	
	var vistaInfoPersonal = Alloy.createController("configuracion/infoPersonal",args).getView();
	
	
	if (OS_IOS) {
		var miCallback = function(){
			var pantallaPrincipal = Alloy.createController("index",args).getView();
			pantallaPrincipal.setActiveTab(3);
			var aux = ((pantallaPrincipal.tabs)[3]);
			console.log('aux ++++++ ' + JSON.stringify(aux));
			console.log('pantalla principal ++++++ ' + JSON.stringify(pantallaPrincipal));
			aux.open(vistaInfoPersonal);	
		};
		miCallback();
			
	};
	if (OS_ANDROID) {
		console.log('ANDROID ++++++++ ');
		vistaInfoPersonal.open();		
	};
	
}