const http = require('http');
const fs = require('fs');
const { error } = require('console');

//Task 6(Understanding the basics) - 

/*const app = http.createServer((req, res) => {
    console.log("Hi Prakhar here is your request");
    res.end(`Hi Prakhar here is your request`);
})*/

//Task 7(Request / Response) -

/*const app = http.createServer((req, res) => {
    const url = req.url;

    if(url === '/home')
    {
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>');
        return res.end();
    }
    else if(url === '/about')
    {
        res.write('<html>');
        res.write('<head><title>About Us page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end();
    }
    else if(url === '/node')
    {
        res.write('<html>');
        res.write('<head><title>Node Js project page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        return res.end();
    }
})

app.listen(4000, (req, res) => {
    console.log(`Hi Prakhar server started at port 4000`);
})*/

//Task 8(Writing and reading from a file) -

const app = http.createServer((req, res) => {
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
        //Alternate methode for reading file -
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

app.listen(4000, (req, res) => {
    console.log(`Server started at port 4000`);
})