// Encapsulando uma promise nativa com uma promise Bluebird
var Promise = require("bluebird");

// O browser passará a ignorar a API do Bluebird com o objeto Promise para evitar conflitos
var Bluebird = Promise.noConflict();
var nativePromise = Promise.resolve();

/* Encapsula uma promise nativa em uma da Bluebird e por meio de resolve() importa
    o arquivo de script */
var blueb = Bluebird.resolve(nativePromise);

console.log('Pending? ' + blueb.isPending());
console.log('Fulfilled? ' + blueb.isFulfilled());
console.log('Rejected? ' + blueb.isRejected());