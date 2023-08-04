import express from "express";

import * as member from "../controllers/index.js";
import {
  validateCreateData,
  validateParamId,
  validateUpdateData,
} from "../utils/validators.js";

const memberRouter = express.Router();

memberRouter.get("/list", member.listAllMembers);
memberRouter.post("/create", validateCreateData, member.createMember);
memberRouter.put(
  "/:id",
  validateUpdateData,
  validateParamId,
  member.updateMember
);
memberRouter.delete("/:id", validateParamId, member.deleteMember);

export default memberRouter;
