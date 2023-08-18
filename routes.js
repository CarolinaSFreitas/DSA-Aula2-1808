import { Router } from "express"
import { filmeCreate, filmeIndex } from "./controllers/filmeController.js"

const router = Router()

router.get("/filmes", filmeIndex)
      .post("/filmes", filmeCreate)
      .delete("/filmes", filmeDelete)
export default router
