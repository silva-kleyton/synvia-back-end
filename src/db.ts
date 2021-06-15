import mongoose from "mongoose";
import "dotenv/config";

const { DB_PORT, DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env

console.log(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`)

mongoose.set("useFindAndModify", false);
mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => console.error(`Connection error: ${err}`));
mongoose.connection.once("open", () => console.log("Database connect"));