var args = arguments[0] || {};
var numeroColumnas = 2;
var espacio = 5;
var anchoContenedor = Ti.Platform.displayCaps.getPlatformWidth();
if (OS_ANDROID) {
	anchoContenedor /= Ti.Platform.displayCaps.logicalDensityFactor;	
};
var nuevoAnchoContenedor = anchoContenedor - (2*espacio);
var anchoColumna = (nuevoAnchoContenedor/numeroColumnas) - espacio;
// var anchoColumna = 150;


var iniciar = function() {
	$.scrollViewMosaico.top = espacio;
	$.scrollViewMosaico.left = espacio;
	$.scrollViewMosaico.right = espacio;
	// $.scrollViewMosaico.bottom = espacio;
};

var agregarMosaico = function() {
	console.log('tamño scrollView ----------- ' + $.scrollViewMosaico.width);
	console.log('anchoColumna ----------- ' + anchoColumna);
	console.log('nuevoAnchoContenedor ----------- ' + nuevoAnchoContenedor);
	var frame = Ti.UI.createView({
		layout: 'vertical',
		width:anchoColumna,
		height:200,
		backgroundColor:'#000000',
		top:0,
		left:0,
		right:espacio,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	var cabeza = Ti.UI.createView({
		backgroundColor: 'red',
		height: 150,
	});
	
	var pie = Ti.UI.createView({
		backgroundColor: 'blue',
		height: 50,
	});
	
	cabeza.addEventListener('click',function(e){
		var winSSAC = Ti.UI.createWindow({
			width: anchoContenedor,
			backgroundColor: '#FFFFFF',
		});
		
		var lbBienvenido = Ti.UI.createLabel({
			text: "Bienvenido al SSAC",
		});
		winSSAC.add(lbBienvenido);
		winSSAC.open();
		
		console.log('cabeza');
	});
	
	pie.addEventListener('click',function(e){
		console.log('pie');
		var moduloSSAC = require('ssac/ssac');
		var winSSAC = moduloSSAC.inicioSSAC();
		if (OS_IOS) {
			var pantallaPrincipal = Alloy.createController("index").getView();
			var aux = ((pantallaPrincipal.tabs)[0]);
			aux.open(winSSAC);	
		};
		if (OS_ANDROID) {
			winSSAC.open();
		};
	});
	frame.add(cabeza);
	frame.add(pie);
	
	
	var frame2 = Ti.UI.createView({
		width:anchoColumna,
		height:200,
		backgroundColor:'#007AFF',
		top:0,
		left:0,
		right:0,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	frame2.addEventListener('click', function(e) {
		var parametros = {
			nombreWidget: "mx.cdmx.widgetAGUMovil"
		};
		// var parametros = {
			// nombreWidget: "mx.cdmx.widgetMiPolicia"
		// };
		var appEnte = Alloy.createController('appEnte', parametros);
		var winAppEnte = appEnte.miAppWidget();
		if (OS_IOS) {
			var pantallaPrincipal = Alloy.createController("index").getView();
			var aux = ((pantallaPrincipal.tabs)[0]);
			aux.open(winAppEnte);	
		};
		if (OS_ANDROID) {
			winAppEnte.open();
		};
		
		
		winAppEnte.open();
		console.log('Tocaste el frame 2');
		
	});
	
	var frame3 = Ti.UI.createView({
		width:anchoColumna,
		height:200,
		backgroundColor:'#000000',
		top:0,
		left:0,
		right:espacio,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	frame3.addEventListener('click', function(e) {
		var parametros = {
			nombreWidget: "mx.cdmx.widgetMiPolicia"
		};
		var appEnte = Alloy.createController('appEnte', parametros);
		var winAppEnte = appEnte.miAppWidget();
		if (OS_IOS) {
			var pantallaPrincipal = Alloy.createController("index").getView();
			var aux = ((pantallaPrincipal.tabs)[0]);
			aux.open(winAppEnte);	
		};
		if (OS_ANDROID) {
			winAppEnte.open();
		};
		
		
		// winAppEnte.open();
		console.log('Tocaste el frame 2');
		
	});
	
	var frame4 = Ti.UI.createView({
		width:anchoColumna,
		height:200,
		backgroundColor:'#007AFF',
		top:0,
		left:0,
		right:0,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	var frame5 = Ti.UI.createView({
		width:anchoColumna,
		height:200,
		backgroundColor:'#000000',
		top:0,
		left:0,
		right:espacio,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	var frame6 = Ti.UI.createView({
		width:anchoColumna,
		height:200,
		backgroundColor:'#007AFF',
		top:0,
		left:0,
		right:0,
		bottom:espacio,
		borderColor:'#000000',
		borderRadius:'0',
		borderWidth:'0'
	});
	
	
	$.scrollViewMosaico.add(frame);
	$.scrollViewMosaico.add(frame2);
	$.scrollViewMosaico.add(frame3);
	$.scrollViewMosaico.add(frame4);
	$.scrollViewMosaico.add(frame5);
	$.scrollViewMosaico.add(frame6);
};



exports.iniciar = iniciar;
exports.agregarMosaico = agregarMosaico;