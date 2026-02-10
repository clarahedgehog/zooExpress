import express from "express"
import * as path from "path"
import { mammals } from "../data/data.js"

const mammalsRouter = express.Router()
const __dirname = path.resolve()

mammalsRouter.get("/", (req, res) => {
  res.render(
    path.join(__dirname, "views/pages/animal-page"),
    {
      pageType: "animals",
      animalsList: mammals
    }
  )
})

export default mammalsRouter