'use strict';
import express from "express"
import path from "path"
import { createServer } from "http"
import cors from 'cors';
import { order } from "./routers/order.router.js";


const server = express()
const app = createServer(server)

const PORT = 8080
server.disable("x-powered-by")

const corsOptions = {
    origin: true,
    credentials: true,
};




server.use(cors(corsOptions));
server.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials"
    );
    next();
});

// routers
server.use("/",order)


app.listen(PORT, async () => {
    console.log(`Server is running: http://localhost:${PORT}`)
})
