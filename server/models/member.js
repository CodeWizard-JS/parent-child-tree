import pool from "../pgHelper/index.js";
import groupBy from "lodash.groupby";

export const listAllMembers = async () => {
  const firstParentMembers = await pool.query(`
      SELECT
      parent.id AS id,
      parent.name AS name,
      parent.age AS age,
      NULL AS parent_id,
      parent.created_at AS created_at,
      parent.updated_at AS updated_at,
      json_agg(child.id) AS children
      FROM
        family_members AS parent
      LEFT JOIN
        family_members AS child
      ON
        child.parent = parent.id
      WHERE
        parent.parent IS NULL
      GROUP BY
        parent.id;
  `);
  const members = await pool.query(`
      SELECT
        parent.id AS id,
        parent.name AS name,
        parent.age AS age,
        NULL AS parent_id,
        parent.created_at AS created_at,
        parent.updated_at AS updated_at,
        COALESCE(json_agg(child.id), '[]') AS children
      FROM
        family_members AS parent
      LEFT JOIN
        family_members AS child
      ON
        child.parent = parent.id
      GROUP BY
        parent.id;
  `);
  if (members.rowCount >= 1) {
    return { members: firstParentMembers.rows, list: members.rows };
  } else {
    return { members: [], list: [] };
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
    throw new Error("Something went wrong when creating member");
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
    throw new Error("Something went wrong when updating member");
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
    throw new Error("Something went wrong when deleting member");
  }
};
