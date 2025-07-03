import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { version } from "os";
import { userRoutes } from "./controllers/user.controller";
const app: Application = express();

const noteSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true, trim: true, default: "" },
        createdAt: { type: Date, default: Date.now },
        category: {
            type: String,
            enum: ["work", "personal", "other"],
            default: "personal",
        },
        pinned: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Note = mongoose.model("Note", noteSchema);
app.post("/create-note", async (req: Request, res: Response) => {
    const myNote = new Note({
        title: "Learning Mongoose",
        content: "Mongoose is a powerful ODM for MongoDB.",
        category: "work",
        pinned: true,
        createdAt: new Date(),
    });

    await myNote.save();
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote,
    });
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/user", userRoutes);

export default app;
