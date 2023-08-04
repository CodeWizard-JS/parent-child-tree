import * as member from '../models/index.js'

export const listAllMembers = async (req, res) => {
  try {
    const members = await member.listAllMembers();
    res.json(members);
  } catch (error) {
    console.log("listAllMembers-error", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createMember = async (req, res) => {
  try {
    const result = await member.createMember();
    res.json("Inserted successfully");
  } catch (error) {
    console.log("createMember-error", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const result = await member.updateMember();
    res.json("Updated successfully");
  } catch (error) {
    console.log("updateMember-error", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const result = await member.deleteMember();
    res.json("Deleted successfully");
  } catch (error) {
    console.log("deleteTodo-error", error.message);
    res.status(500).json({ error: error.message });
  }
};
