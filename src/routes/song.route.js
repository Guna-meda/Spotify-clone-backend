import {Router} from "express"
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { getAllSongs, getFeaturedSongs, getMadeForYou, getTrendingSongs } from "../controller/song.controller.js";

const router= Router();

router.get ("/" ,protectRoutes,requireAdmin,getAllSongs)
router.get("/featured" , getFeaturedSongs)
router.get("/made-for-you" , getMadeForYou)
router.get("/trending" , getTrendingSongs)

export default router;
