import express from "express"
import * as path from "path"
import { aboutUs, mission } from "../data/about-us.js"

const aboutRouter = express.Router()
const __dirname = path.resolve()

aboutRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/about"),
  {
    pageType: "about",
    aboutUs: aboutUs,
    mission: mission,
  }
)
})

export default aboutRouter