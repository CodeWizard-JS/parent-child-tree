import pool from "../pgHelper/index.js";

export const listAllMembers = async () => {
  const members = await pool.query("SELECT * FROM family_members");
  if (members.rowCount >= 1) {
    return id;
  } else {
    throw new Error({ message: "No data found" });
  }
};

export const createMember = async ({ name, age, parent }) => {
  const createdMember = await pool.query(`
    INSERT INTO family_members (name, age, parent)
    VALUES ( '${name}', ${age}, ${parent})
    RETURNING id, name, age, parent, created_at, updated_at
  `);
  if (createdMember.rowCount === 1) {
    return createdMember.rows[0];
  } else {
    throw new Error({ message: "Something went wrong when creating member" });
  }
};
export const updateMember = async ({ name, age, parent, id }) => {
  const updatedMember = await pool.query(`
    UPDATE family_members
    SET name = '${name}', age = ${age}, parent = '${parent}', updated_at = current_timestamp
    WHERE id = '${id}'
    RETURNING id, name, age, parent, created_at, updated_at
  `);
  if (updatedMember.rowCount === 1) {
    return updatedMember.rows[0];
  } else {
    throw new Error({ message: "Something went wrong when updating member" });
  }
};
export const deleteMember = async (id) => {
  const deletedMember = await pool.query(
    `DELETE FROM family_members WHERE id = '${id}'`
  );
  if (deletedMember.rowCount === 1) {
    return id;
  } else {
    throw new Error({ message: "Something went wrong when deleting member" });
  }
};
