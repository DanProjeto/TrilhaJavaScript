// ======== APENAS CÓDIGO DE EXEMPLO ======== 

// Função carregarImg retornando uma promise
function carregarImg(url) {
	var promise = new Promise(
		function resolver(resolve, reject) {
			var img = new Image();
			img.src = url;

			img.onload = function() {
				resolve(img);
			};

			img.onerror = function(e) {
				reject(e);
			};
		}
	);
	return promise;
}