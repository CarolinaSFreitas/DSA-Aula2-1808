import { Router } from "express"
import { filmeCreate, filmeDelete, filmeIndex, filmeUpdate } from "./controllers/filmeController.js"

const router = Router()

router.get("/filmes", filmeIndex)
      .post("/filmes", filmeCreate)
      .put("/filmes/:id", filmeUpdate)
      .delete("/filmes/:id", filmeDelete)
export default router
