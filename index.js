import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = []

app.post("/sign-up", (req, res) => {
    const body = req.body
    if (body.username.length >= 2 && isValidHttpUrl(body.avatar)) {
        // validate data
        users.push({
            username: body.username,
            avatar: body.avatar,
        })
        res.send("OK")
    }
    res.send("Invalid data")
})

app.get("/tweets", (req, res) => {
    res.send("Hello world!")
})

app.post("/tweets", (req, res) => {
    res.send("Hello world!")
})

app.listen(5000)

// FUNCTIONS
function isValidHttpUrl(string) {
    let url

    try {
        url = new URL(string)
    } catch (_) {
        return false
    }

    return url.protocol === "http:" || url.protocol === "https:"
}
