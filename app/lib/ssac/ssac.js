var inicioSSAC = function() {
	var winSSAC = Ti.UI.createWindow({
		backgroundColor: '#FFFFFF'
	});
	var lbBienvenido = Ti.UI.createLabel({
		text:'Bienvenido al SSAC desde un modulo CommonJS'
	});
	winSSAC.add(lbBienvenido);
	
	return winSSAC;
	
	
	
};

exports.inicioSSAC = inicioSSAC;
