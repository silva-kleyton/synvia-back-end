import mongoose from "mongoose";
import "dotenv/config";
import verifyEnvironment from "./utils/verifyEnviorement";

const { DB_PORT, DB_HOST, DB_USER, DB_PASS, DB_DATABASE, MONGO_URL } = process.env;

const mongoUrl = verifyEnvironment() === "local" ?
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin` :
    `${MONGO_URL}`

mongoose.set("useFindAndModify", false);
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => console.error(`Connection error: ${err}`));
mongoose.connection.once("open", () => console.log("Database connect"));