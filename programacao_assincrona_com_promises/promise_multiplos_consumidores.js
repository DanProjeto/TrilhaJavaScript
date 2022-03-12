// ======== APENAS CÓDIGO DE EXEMPLO ========

// Uma promise com múltiplos consumidores.
// Objeto simples com uma propriedade e uma função
var user = {
	promisePerfil: null,
	/* Função responsável por retornar a promise que será 
	    usada como um objeto contendo o perfil de usuário */
	getPerfil: function() {
		if (!this.promisePerfil) {
			this.promisePerfil = ajax();
		}
		return this.promisePerfil;
	}
};

/* Passa o usuário para os objetos navbar e account que exibirão 
   informações sobre o respectivo perfil */
var navbar = {
	show: function(user) {
		user.getPerfil().then(function(perfil) {
			console.log('*** Navbar ***');
			console.log('Nome: ' + perfil.nome);
		});
	}
};

var account = {
	show: function(user) {
		user.getPerfil().then(function(perfil) {
			console.log('*** Informações da Conta ***');
			console.log('Nome: ' + perfil.nome);
			console.log('Envia muitos emails? ' + perfil.subscribedToSpam);
		});
	}
};

navbar.show(user);
account.show(user);