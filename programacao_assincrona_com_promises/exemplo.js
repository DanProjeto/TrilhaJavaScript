// Callback síncrono
function callback(msg) {
     console.log(msg);
}
 msgs.forEach(callback);

 // Callback assíncrono
 function realocarElemento() {
      console.log('realocando...');
 // ...
 }
 window.requestAnimationFrame(realocarElemento);
console.log('Última linha do script');
 // Saída no Console:
 // Última linha do script
// realocando...