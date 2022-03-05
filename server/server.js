import express from "express";
import * as path from "path";


const app = express();

app.use(express.static("../client/dist"))


app.use(((req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"))
}))




const server = app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server started at port: " + server.address().port)
})