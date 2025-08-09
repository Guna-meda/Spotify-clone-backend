import dotenv from "dotenv"
import {connectDB} from "./db/index.js"
import { app } from "./app.js";
import { initializeSocket } from "./utils/socket.js";
import { createServer } from "http";

dotenv.config();

const httpServer = createServer(app);
initializeSocket(httpServer);

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR:", error);
      throw error;
    });

    httpServer.listen(process.env.PORT || 8000, () => {
      const port = process.env.PORT || 8000;
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
.catch ((err) => {
  console.log("MONGO db connection failed !!" , err);
})
