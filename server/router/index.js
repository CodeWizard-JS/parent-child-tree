import express from "express";

import memberRouter from "./member.js";

const familyRouter = express.Router();

familyRouter.use("/members", memberRouter);

export default familyRouter;
