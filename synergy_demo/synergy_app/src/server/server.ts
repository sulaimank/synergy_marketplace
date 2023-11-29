import express from "express";
import os from "os";
import config from "./config";


const server = express();

// Register middle-ware to handle static files (css, images)
server.use(express.static("dist"))

// Use EJS as templating view engine
server.set("view engine", "ejs")

// Use index template in views directory
server.use("/", (req, res) => {
    res.render("index", {
        content: "Welcome UCF FinTech to <b>Synergy 8</b> App!!!"
    })
})

server.listen(8080, config.HOST,  () => {
    console.info(`Express server is listening on port ${config.PORT} on ${config.SERVER_URL}`,
        `Free Mem: ${os.freemem() / 1024 / 1024}`)
})