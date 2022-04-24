import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    const body = req.body
    // validate data
    if (body.username.length >= 2 && isValidHttpUrl(body.avatar)) {
        users.push({
            username: body.username,
            avatar: body.avatar,
        })
        res.send("OK")
    }
    res.send("Invalid data")
})

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(-10))
})

app.post("/tweets", (req, res) => {
    const body = req.body
    const user = users.find((user) => user.username === body.username) // get user data
    tweets.push({
        username: user.username,
        avatar: user.avatar,
        tweet: body.tweet,
    })
    res.send("OK")
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
