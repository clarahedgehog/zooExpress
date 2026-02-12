import express from "express"
import * as path from "path"
import { reptiles } from "../data/data.js"

const reptilesRouter = express.Router()
const __dirname = path.resolve()

reptilesRouter.get("/", (req, res) => {
    let selectedReptiles = reptiles
  
    if (req.query.name) {
      selectedReptiles = reptiles.filter(reptile => reptile.name === req.query.name)
    }
  res.render(
    path.join(__dirname, "views/pages/animal-page"),
    {
      pageType: "animals",
      animalsList: selectedReptiles
    }
  )
})

export default reptilesRouter