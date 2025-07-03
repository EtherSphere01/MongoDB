import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRoutes = express.Router();

userRoutes.get("/", async (req: Request, res: Response) => {
    const user = await User.find();
    res.status(200).json({
        success: true,
        message: "User route is working",
        users: user,
    });
});

userRoutes.post(
    "/create",
    async (req: Request, res: Response): Promise<void> => {
        const { firstName, lastName, email, password, role } = req.body;

        if (!firstName || !lastName || !email || !password) {
            res.status(400).json({
                success: false,
                message: "Please provide all required fields",
            });
            return;
        }

        try {
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                role: role || "user",
            });

            await newUser.save();
            res.status(201).json({
                success: true,
                message: "User created successfully",
                user: newUser,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating user",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
);
