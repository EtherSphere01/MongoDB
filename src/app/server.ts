import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://simpleDBUser:IDJddH9xkUpvfv01@cluster0.8o3ok5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Connected to MongoDB");
        server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
