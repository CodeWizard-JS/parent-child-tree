import pool from "./index.js";

const uuid_extension = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

const family_members_columns = `
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
name VARCHAR(100) NOT NULL,
age INTEGER NOT NULL,
parent UUID,
created_at timestamp with time zone DEFAULT current_timestamp,
updated_at timestamp with time zone DEFAULT current_timestamp`;

const family_members_tbl = `CREATE TABLE IF NOT EXISTS public.family_members ( ${family_members_columns} );`;

const intiQuery = `${uuid_extension}${family_members_tbl}`;

export const dbInit = async () => {
  try {
    await pool.query(intiQuery);
  } catch (error) {
    throw error.message;
  }
};
