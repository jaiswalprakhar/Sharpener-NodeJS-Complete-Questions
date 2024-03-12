const http = require('http');

const app = http.createServer((req, res) => {
    console.log("Hi Prakhar here is your request");
    res.end(`Hi Prakhar here is your request`);
})

app.listen(4000, (req, res) => {
    console.log(`Hi Prakhar server started at port 4000`);
})