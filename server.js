const http = require('http');

const pageData = require('./data.js');


const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  
  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <title>${pageData.title}</title>
    </head>
    <body>
      <h1>${pageData.title}</h1>
      <h2>${pageData.subtitle}</h2>
      <p>${pageData.description}</p>
    </body>
    </html>
  `;

  
  res.end(html);
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});