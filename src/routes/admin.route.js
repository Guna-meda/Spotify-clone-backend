import {Router} from "express"
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import {createSong,deleteSong,createAlbum,deleteAlbum,checkAdmin} from "../controller/admin.controller.js"

const router= Router();

router.use (protectRoutes,requireAdmin)

router.get("/check",checkAdmin)

router.post("/songs",createSong)
router.delete("/songs/:id",deleteSong)

router.post("/albums",createAlbum)
router.delete("/albums/:id",deleteAlbum)

export default router;
