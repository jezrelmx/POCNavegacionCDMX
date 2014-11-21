var args = arguments[0] || {};



var miAppWidget = function() {
	console.log('parametros --------------------- ' + JSON.stringify(args));
	var miWidget = Alloy.createWidget(args.nombreWidget);
	$.winAppWidget.add(miWidget.getView());
	return $.winAppWidget;
	// $.winAppWidget.open();
};

exports.miAppWidget = miAppWidget;
