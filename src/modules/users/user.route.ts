import { Router } from "express";
import { UserController } from "./user.controller";
import { authenticate, authorize } from "../../middleware/auth.middleware";
import { validate } from "../../middleware/validation.middleware";
import { updateUserSchema } from "./user.validation";

const router = Router();

// All routes
router.use(authenticate);

// Admin only routes
router.get("/", authorize("admin"), UserController.getAllUsers);
router.delete("/:userId", authorize("admin"), UserController.deleteUser);

// Admin or own
router.put("/:userId", validate(updateUserSchema), UserController.updateUser);

export default router;
