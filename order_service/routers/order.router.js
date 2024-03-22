import express from "express"
export const order = express.Router()


order.get("/test", async (req, res) => {
    try {
        res.status(200).send("okey")
    } catch (e) {
        res.status(500).send("error 9")
    }
})