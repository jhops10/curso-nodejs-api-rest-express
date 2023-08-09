const http = require('http');
const port = 3000;


const rotas = {
  '/': 'Curso de Node',
  '/livros': 'Listagem de Livros',
  '/autores': 'Listagem de Autores'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});