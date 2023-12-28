const http = require("http");

const express = require('express');

const app = express();

app.use((req,res,next) =>{
  console.log('in the middleware');
  next();
})

app.use((req,res)=>{
  console.log('this is another middleware');
})

const server = http.createServer(routes.handler);

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
