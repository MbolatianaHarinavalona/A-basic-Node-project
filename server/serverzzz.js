 

var http = require('http');
var server = http.createServer(function(req, res) {
 res.writeHead(200); // renvoie le code 200 dansl'en-tête de la réponse, "OK " au navigateur
 res.end('Salut tout le monde !'); // termine laréponse (du texte brut)
});
server.listen(8080); // le serveur est lancé et"écoute" sur le port 8080 La fonction à exécuter est la fonction de callback.
// Code identique au précédent
var fonctioncallback = function(req, res) {
 res.writeHead(200);
 res.end('Salut tout le monde !');
}



var fonctioncallback = function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
   }
   var server = http.createServer(fonctioncallback);