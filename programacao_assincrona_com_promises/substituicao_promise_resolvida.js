// Substituindo uma promise resolvida
var usuario = {
	autenticado: false,
	login: function() {

	}
};


function showMenuPrincipal() {
	var p = (!usuario.autenticado) ? usuario.login() : Promise.resolve();

	return p.then(function() {

	});
}