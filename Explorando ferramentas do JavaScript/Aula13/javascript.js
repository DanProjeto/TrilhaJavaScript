// JavaScript Document

function abrepagina (url) {
	if ( confirm ("Tem certeza que deseja ir para esta página?"))
	window.location = url;	
}
function validaContato () {
	// validar o nome
	var nome = document.getElementById('nome');
	if (nome.value == '') {
		alert('O campo nome não foi preenchido');
		return false;
	}
	// validar o email
	// verificar se selecionou um interesse
	// verificar se selecionou um sexo  
	// verificar se digitou uma mensagem

	return true; 	
}