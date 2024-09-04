const http = require("http");

// Criar função genérica que vai responder as requisiçoes do servidor

const tratarRespostaDaRequisicao = function (requisicao, resposta) {
  resposta.writeHead(200, { "Content-Type": "text/html" });
  resposta.write("<h1>Meu primeiro Servidor Web em Node.js</h1>");
  resposta.end();
};

// Executa a função createServer do http que espera um tratamento de requisição/resposta e devolve um servidor

const server = http.createServer(tratarRespostaDaRequisicao);

// Executa o servidor na porta 3000 e notifica no console quando o servidor terminar de subir

server.listen(3000, function () {
  console.log("Servidor no ar em http://localhost:3000");
});
