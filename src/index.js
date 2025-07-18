import dotenv from "dotenv"
import {connectDB} from "./db/index.js"
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR:", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      const port = process.env.PORT || 8000;
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
.catch ((err) => {
  console.log("MONGO db connection failed !!" , err);
})
