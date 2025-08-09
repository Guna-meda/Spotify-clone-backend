import express from "express";
import {clerkMiddleware} from '@clerk/express'
import fileUpload from "express-fileupload"
import path from "path";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
const _dirname=path.resolve();

app.use(
  cors({
origin: [
      "http://localhost:3000", // for local dev
      "https://spotify-clone-5g33.vercel.app", // production
      "https://spotify-clone-5g33-8xm9goo12-gunas-projects-a30cf894.vercel.app", // preview
    ],    credentials: true,
  })
);

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(clerkMiddleware());
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir: path.join(_dirname , "tmp"),
  createParentPath:true,
  limits:{
    fileSize:10*1024*1024,
  }
}))

//routes import
import userRouter from "./routes/user.route.js"
import adminRouter from "./routes/admin.route.js"
import authRouter from "./routes/auth.route.js"
import songRoute from "./routes/song.route.js"
import albumRoute from "./routes/album.route.js"
import statRoute from "./routes/stat.route.js"
import { create } from "domain";

//routes declaration
app.use("/api/v1/users" , userRouter)
app.use("/api/v1/admin" , adminRouter)
app.use("/api/v1/auth" , authRouter)
app.use("/api/v1/song" , songRoute)
app.use("/api/v1/album" , albumRoute)
app.use("/api/v1/stat" , statRoute)

app.use((err, req, res, next) => {
  res.status(500).json({message: process.env.NODE_ENV === "production"?"Internal server error" :err.message})
})

export {app}