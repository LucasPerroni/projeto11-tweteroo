import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/sign-up", (req, res) => {
    res.send("Hello world!")
})

app.get("/tweets", (req, res) => {
    res.send("Hello world!")
})

app.post("/tweets", (req, res) => {
    res.send("Hello world!")
})

app.listen(5000)
