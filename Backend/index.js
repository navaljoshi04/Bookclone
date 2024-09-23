import express from "express";
import dotenv from "dotenv";
import connectWithDatabase from "./config/database.js";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

connectWithDatabase();
const PORT = process.env.PORT;

//running the routes:
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
