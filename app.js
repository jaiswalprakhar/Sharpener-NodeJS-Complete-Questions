const http = require('http');
const routes = require('./routes');


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

//Task 8 & 9(Writing and reading from a file) -

const app = http.createServer(routes);

app.listen(4000, (req, res) => {
    console.log(`Server started at port 4000`);
})