import { config } from "dotenv";
config();

export const _config = {
    _PORT: process.env.PORT || 4200,
    HOST: process.env.HOST,
    USER_DB: process.env.USER_DB,
    PASSWORD: process.env.PASSWORD,
    PORT_DB: process.env.PORT_DB,
    DATABASE: process.env.DATABASE
};