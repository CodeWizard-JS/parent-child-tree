import express from "express";

import * as member from "../controllers/index.js";

const memberRouter = express.Router();

memberRouter.get("/list", member.listAllMembers);
memberRouter.post("/create", member.createMember);
memberRouter.put("/:id", member.updateMember);
memberRouter.delete("/:id", member.deleteMember);

export default memberRouter;
