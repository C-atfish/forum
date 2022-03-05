import express from "express";


const app = express();

app.use(express.static("../client/dist"))




const server = app.listen(process.env.port || 3000, ()=> {
    console.log("Server started at port: " + server.address().port)
})