import pool from "../pgHelper/index.js";

export const listAllMembers = async () => {
  const members = await pool.query("SELECT * FROM todos");
  return members;
};

export const createMember = async (data) => {
  const result = await pool.query();
};
export const updateMember = async (data) => {
  const result = await pool.query();
};
export const deleteMember = async (data) => {
  const result = await pool.query();
};
