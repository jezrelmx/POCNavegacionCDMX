var args = arguments[0] || {};
if (OS_ANDROID) {
	function regresar(evento){
		$.winInfoPersonal.close();
		$.destroy();		
	}	
};
// $.winInfoPersonal.close();
$.winInfoPersonal.addEventListener('close', function() {
    $.destroy();
    console.log('Se ha cerrado la ventana');
});