// Encapsulando lógica condicional com uma promise
var usuario = {
	autenticado: false,
	login: function() {

	}
};

function showMenuPrincipal() {
	return usuario.login().then(function() {

	});
}