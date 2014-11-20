var args = arguments[0] || {};



var miAppWidget = function() {
	console.log('parametros --------------------- ' + JSON.stringify(args));
	var miWidget = Alloy.createWidget("mx.cdmx.widgetMiPolicia");
	$.winAppWidget.add(miWidget.getView());
	$.winAppWidget.open();
};

exports.miAppWidget = miAppWidget;
