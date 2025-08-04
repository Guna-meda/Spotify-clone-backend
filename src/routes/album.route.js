import {Router} from "express"
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router= Router();

router.get ("/" ,getAllAlbums );
//router.get("/:albumId",getAlbumById)
router.get("/:albumId", (req, res, next) => {
  console.log("HIT ALBUM ROUTE with ID:", req.params.albumId);
  next(); // pass to controller
}, getAlbumById);


export default router;
