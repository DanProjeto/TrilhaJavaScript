// Cacheando uma promise
var $ = require("jquery");

var usuario = {
	promiseLogin: null,
	login: function() {
		var eu = this;
		// promiseLogin é criado na primeira vez que o método login() é chamado 
		if (this.promiseLogin == null) {
			this.promiseLogin = $.ajax();

			/* Caso aconteça alguma falha no login, a promise é cacheada e o processo
			    começará novamente 
			    Obs: cachear (salvar temporariamente) */
			this.promiseLogin.catch(function() {
				eu.promiseLogin = null;
			});
		}
		/* Todas as chamadas subsequentes retornam a mesma promise a menos que o login 
		     sofra alguma falha*/
		return this.promiseLogin;
	}
};