import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

let server: Server;

const PORT = 5000;

async function main() {
    try {
        const connectionString = process.env.MONGODB_CONNECTION_STRING;
        if (!connectionString) {
            throw new Error(
                "MONGODB_CONNECTION_STRING environment variable is not set"
            );
        }

        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
        server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
    }
}

main();
