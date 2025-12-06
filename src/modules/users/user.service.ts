import { pool } from "../../config/db";

export class UserService {
  static async getAllUsers() {
    const result = await pool.query(
      "SELECT id, name, email, phone, role FROM users ORDER BY created_at DESC"
    );
    return result.rows;
  }

  static async getUserById(id: number) {
    const result = await pool.query(
      "SELECT id, name, email, phone, role FROM users WHERE id = $1",
      [id]
    );
    return result.rows[0];
  }

  static async updateUser(id: number, updateData: any, currentUser: any) {
    const userExists = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    if (userExists.rows.length === 0) {
      throw new Error("User not found");
    }

    if (currentUser.id !== id && currentUser.role !== "admin") {
      throw new Error("You can only update your own profile");
    }

    if (currentUser.role === "customer" && updateData.role) {
      throw new Error("Only admin can change user roles");
    }

    const updates: string[] = [];
    const values: any[] = [];
    let valueIndex = 1;

    if (updateData.name) {
      updates.push(`name = $${valueIndex}`);
      values.push(updateData.name);
      valueIndex++;
    }

    if (updateData.email) {
      updates.push(`email = $${valueIndex}`);
      values.push(updateData.email.toLowerCase());
      valueIndex++;
    }

    if (updateData.phone) {
      updates.push(`phone = $${valueIndex}`);
      values.push(updateData.phone);
      valueIndex++;
    }

    if (updateData.role && currentUser.role === "admin") {
      updates.push(`role = $${valueIndex}`);
      values.push(updateData.role);
      valueIndex++;
    }

    updates.push(`updated_at = NOW()`);

    values.push(id);

    const query = `
      UPDATE users 
      SET ${updates.join(", ")} 
      WHERE id = $${valueIndex} 
      RETURNING id, name, email, phone, role
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async deleteUser(id: number) {
    const activeBookings = await pool.query(
      `SELECT COUNT(*) FROM bookings 
       WHERE customer_id = $1 AND status = 'active'`,
      [id]
    );

    if (parseInt(activeBookings.rows[0].count) > 0) {
      throw new Error("Cannot delete user with active bookings");
    }

    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING id",
      [id]
    );

    if (result.rows.length === 0) {
      throw new Error("User not found");
    }

    return { id };
  }
}
