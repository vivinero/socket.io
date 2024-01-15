const express = require("express")
const http =  require("http")
const app = express()
const port = 4000
const socket = require("socket.io")
const server = http.createServer(app)
const io = socket(server)

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("Homepage")
})

io.on("connection",(socket)=>{
    socket.on("message", (data)=>{
        socket.broadcast.emit("message", data)
    })
})

server.listen(port, ()=> {
    console.log(`Server is Listerning on port ${port}`)
})