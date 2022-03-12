var usuario = {
	autenticado: false,
	login: function() {

	}
};

// O menu é exibido imediatamente se o usuário já está autenticado
function showMenuPrincipal() {
	if (!usuario.autenticado) {
		/* Caso contrário, o processo de login assíncrono é executado 
		    e showMenuPrincipal é chamado novamente já que a autenticação foi bem sucedida */
		usuario.login().then(showMenuPrincipal);
		return;
	}
};

/* Obs: Esse exemplo pode dar problema já que a função acima pode se comportar tanto de 
     forma síncrona como assíncrona dependendo se o usuário pode já estar autenticado ou não.  */