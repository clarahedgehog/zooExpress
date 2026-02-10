import express from "express"
import reptilesRouter from "./routes/reptiles-route.js"
import * as path from "path"
import mammalsRouter from "./routes/mammals-route.js"
import birdsRouter from "./routes/birds-route.js"

const app = express()
const port = 3003

const __dirname = path.resolve()

app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/index"),
    {
      pageType: "home"
    }
  )
})

app.use("/reptiles", reptilesRouter)
app.use("/mammals", mammalsRouter)
app.use("/birds", birdsRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))