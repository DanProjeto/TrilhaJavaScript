// JavaScript Document

function abrepagina (url) {
	if ( confirm ("Tem certeza que deseja ir para esta página?"))
	window.location = url;	
}
function validaContato () {
	// validar o nome
	var nome = document.getElementById('nome');
	if (nome.value == '') {
		alert("O campo nome não foi preenchido");
		return false;
	}
	// validar o email
	var email = document.getElementById('email');
	if (email.value == '') {
		alert('O campo e-mail não foi preenchido');
		return false;			
	}
	if (email.value.indexOf('@') == -1) { 
		alert("Falta o Arroba");
		return false;
	}
	
	if (email.value.indexOf('.') == -1) { 
		alert("Dominiu incorreto");	
		return false;
	}
	
	// verificar se selecionou um interesse
	var interesse = document.getElementById('interesse');
	if (interesse.value == -1 ) {
		alert("Seleciona uma área de interesse");
		return false; 
	}
	
	// verificar se selecionou um sexo  
	var radio1 = document.getElementById('radio1');
	var radio2 = document.getElementById('radio1');	
	if (!(radio1.checked || radio2.checked)) {
		alert("Selecione o sexo");	
		return false
	}
	
	// verificar se digitou uma mensagem
	var mensagem = document.getElementById('nensagem');
	if (mensagem.value == '') {
		alert("Informe a mensagem");	
		return false
	}
	
	return true; 	
}