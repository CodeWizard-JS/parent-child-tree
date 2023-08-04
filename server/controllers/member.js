import * as member from "../models/index.js";

export const listAllMembers = async (req, res) => {
  try {
    const members = await member.listAllMembers();
    res.json({
      success: 1,
      message: "Fetched all Members successfully",
      data: members,
    });
  } catch (error) {
    console.log("listAllMembers-error", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createMember = async (req, res) => {
  try {
    const result = await member.createMember(req.body);
    res.json({ success: 1, message: "Inserted successfully", data: result });
  } catch (error) {
    console.log("createMember-error", error.message);
    res.status(500).json({ success: 0, message: error.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const result = await member.updateMember({
      id: req.params.id,
      ...req.body,
    });
    res.json({ success: 1, message: "Updated successfully", data: result });
  } catch (error) {
    console.log("updateMember-error", error);
    res.status(500).json({ success: 0, message: error.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const result = await member.deleteMember(req.params.id);
    res.json({ success: 1, message: "Deleted successfully", data: result });
  } catch (error) {
    console.log("deleteMember-error", error.message);
    res.status(500).json({ success: 0, message: error.message });
  }
};
