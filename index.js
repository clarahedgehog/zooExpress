import express from "express"
import reptilesRouter from "./routes/reptiles-route.js"
import * as path from "path"
import mammalsRouter from "./routes/mammals-route.js"
import birdsRouter from "./routes/birds-route.js"
import { mammals, reptiles, birds } from "./data/data.js"

const app = express()
const port = 3003

const __dirname = path.resolve()

app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const allAnimals = [...mammals, ...reptiles, ...birds]
  allAnimals.sort((a, b) => a.name.localeCompare(b.name));
  allAnimals.forEach(animal => {
    animal.group = animal.group.toLowerCase()
  })
  res.render(path.join(__dirname, "views/pages/index"),
    {
      pageType: "home",
      animalsInfo: allAnimals
    }
  )
})

app.use("/reptiles", reptilesRouter)
app.use("/mammals", mammalsRouter)
app.use("/birds", birdsRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))