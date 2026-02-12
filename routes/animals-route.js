import express from "express"
import * as path from "path"
import { birds, mammals, reptiles } from "../data/data.js"

const infoRouter = express.Router()
const __dirname = path.resolve()

const animalData = { birds, mammals, reptiles }

infoRouter.get('/', (req, res) => {
    res.render('pages/index', {
        data: animalData,
        name: animalData.name,
        group: animalData.group,
        user: siteData.user
    });
});


module.exports = infoRouter;