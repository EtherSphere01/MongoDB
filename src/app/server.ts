import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "");
        console.log("Connected to MongoDB");
        server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
