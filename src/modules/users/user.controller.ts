import { Request, Response } from "express";
import { UserService } from "./user.service";
import { successResponse } from "../../utils/apiResponse";
import { AuthRequest } from "../../middleware/auth.middleware";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();

      res
        .status(200)
        .json(
          successResponse(
            users.length > 0
              ? "Users retrieved successfully"
              : "No users found",
            users
          )
        );
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async updateUser(req: AuthRequest, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const currentUser = req.user!;

      const updatedUser = await UserService.updateUser(
        userId,
        req.body,
        currentUser
      );

      res
        .status(200)
        .json(successResponse("User updated successfully", updatedUser));
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteUser(req: AuthRequest, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      await UserService.deleteUser(userId);

      res.status(200).json(successResponse("User deleted successfully"));
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}
