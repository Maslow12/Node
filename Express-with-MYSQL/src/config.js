import { config } from "dotenv";
const _PORT = process.env.PORT | 4200

config();

export default {
    port: _PORT,
    host: "process.env.",
    user_db: "",
    password: ""
};