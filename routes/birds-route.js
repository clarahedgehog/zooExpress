import express from "express"
import * as path from "path"
import { birds } from "../data/data.js"

const birdsRouter = express.Router()
const __dirname = path.resolve()

birdsRouter.get("/", (req, res) => {
  let selectedBirds = birds

  if (req.query.name) {
    selectedBirds = birds.filter(bird => bird.name === req.query.name)
  }
  res.render(
    path.join(__dirname, "views/pages/animal-page"),
    {
      pageType: "animals",
      animalsList: selectedBirds
    }
  )
})

export default birdsRouter