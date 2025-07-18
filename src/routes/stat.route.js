import {Router} from "express"

const router= Router();

router.get ("/" , (res,req) => {
  res.send ("Stat route")
})

export default router;
