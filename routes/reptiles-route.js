import express from "express"
import * as path from "path"
import { reptiles } from "../data/data.js"

const reptilesRouter = express.Router()
const __dirname = path.resolve()

reptilesRouter.get("/", (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/animal-page"),
    {
      pageType: "animals",
      animalsList: reptiles
    }
  )
})

export default reptilesRouter