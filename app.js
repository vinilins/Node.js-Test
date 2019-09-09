var clc = require("cli-color");
var funcoes = require("./funcoes")

console.log(clc.yellow("Mensagem amarelo"));

console.log(clc.red.bgWhite.underline("Underlined red text on white background."));

console.log(clc.red("red") + " plain " + clc.blue("blue"));

console.log(clc.red("red " + clc.blue("blue") + " red"));

var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
 
console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));

var msg = clc.xterm(202).bgXterm(236);
console.log(msg("Orange text on dark gray background"));

console.log(funcoes.calcularSoma(1,10));

var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("./index.html", function(erro, conteudo){
        if(erro){
            console.log(erro);
        }
        {
            response.write(conteudo);
        }
        response.end();
    })
}).listen(8081);

console.log("\nServidor rodando em http://localhost:8081");