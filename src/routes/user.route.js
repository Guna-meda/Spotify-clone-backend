import {Router} from "express"

const router= Router();

router.get ("/" , (res,req) => {
  res.send ("User route")
})

export default router;
