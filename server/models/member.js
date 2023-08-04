import pool from "../pgHelper/index.js";
import groupBy from "lodash.groupby";

export const listAllMembers = async () => {
  const members = await pool.query("SELECT * FROM family_members");
  if (members.rowCount >= 1) {
    const groupedMembers = groupBy(members.rows, "parent");
    const modifiedMembers = members.rows
      .map((member) => {
        const children = groupedMembers[member.id] ?? [];
        return { ...member, children };
      })
      .filter(
        (member) => !(member.parent !== null && member.children.length === 0)
      );
    return modifiedMembers;
  } else {
    throw new Error({ message: "No data found" });
  }
};

export const createMember = async ({ name, age, parent }) => {
  const createdMember = await pool.query(`
    INSERT INTO family_members (name, age, parent)
    VALUES ( '${name}', ${age}, ${parent !== null ? `'${parent}'` : parent})
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
  const updatedMember = await pool.query(`
    UPDATE family_members
    SET parent = null, updated_at = current_timestamp
    WHERE parent = '${id}'
    RETURNING id, name, age, parent, created_at, updated_at
  `);
  if (deletedMember.rowCount === 1) {
    return { deletedMember: id, updatedMembers: updatedMember.rows };
  } else {
    throw new Error({ message: "Something went wrong when deleting member" });
  }
};
