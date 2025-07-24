import pool from "@/lib/db";
import createUsersTable from "@/models/userSchema";

async function init() {
  try {
    await pool.query(createUsersTable);
    console.log("Users table created successfully.");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await pool.end();
  }
}

init();
