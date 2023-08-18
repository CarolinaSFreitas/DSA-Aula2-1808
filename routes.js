import { Router } from "express"
import { filmeIndex } from "./controllers/filmeController.js"

const router = Router()

router.get("/filmes", filmeIndex)

export default router
