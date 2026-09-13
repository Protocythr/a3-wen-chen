import { MongoClient } from 'mongodb';
import dotenv from "dotenv"

dotenv.config({ path: "atlas-credentials.env" });

export async function runGetStarted() {
    // Replace the uri string with your connection string
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    console.log(uri);
    try {
        await client.connect();
        console.log("Connected!");
    } finally {
        await client.close();
    }
    return;
}
runGetStarted().catch(console.dir);

