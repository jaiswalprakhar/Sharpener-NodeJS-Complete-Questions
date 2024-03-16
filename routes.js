const fs = require('fs');

const requestHandler = ((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === "/")   {
    fs.readFile('message.txt', (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(`Reading data from file ${data}`);
        res.write('<html>');
        res.write('<head><title>Chat App</title></head>');
        res.write(`<body><p id = "para">${data}</p><form action ="/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();

        //Alternate method for reading file -
        //console.log(data.toString()); //This will give error when no file is present
        /*console.log(data);
        return res.end(`<html>
            <head><title>Chat App</title></head>
            <body><p id = "para">${data}</p><form action ="/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>
            </html>`   
            );*/
    });
  }

  if(url === "/message" && method === "POST")   {
    const body = [];
    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        //console.log(parsedBody);
        const message = parsedBody.split("=")[1];
        fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    })
  }

  /*res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();*/
})

module.exports = requestHandler;