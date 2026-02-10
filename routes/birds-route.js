import express from "express"
import * as path from "path"
import { birds } from "../data/data.js"

const birdsRouter = express.Router()
const __dirname = path.resolve()

birdsRouter.get("/", (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/animal-page"),
    {
      pageType: "animals",
      animalsList: birds
    }
  )
})

export default birdsRouter