import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import familyRouter from "./router/index.js";
import { dbInit } from "./pgHelper/init.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api running");
});

app.use("/family", familyRouter);
dbInit();
// app.listen(port, async () => {
//   try {
//     console.log(`Family members tree app listening on port ${port}!`);
//     await dbInit();
//     console.log("All tables created successfully");
//   } catch (error) {
//     console.log("app.listen error", error);
//   }
// });

export default app;
