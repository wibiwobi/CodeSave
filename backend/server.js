import express from "express";
import "dotenv/config";
import cors from "cors";
import mysql from "mysql2/promise";
import saveVersionCodeRouter from "./save-version-db.js";
import saveCodeRouter from "./save-code-db.js";
const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["PUT", "GET", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

export const db = mysql.createPool({
    host: process.env.LOCAL_MYSQL_HOST,
    user: process.env.LOCAL_MYSQL_USER,
    password: process.env.LOCAL_MYSQL_PASSWORD,
    database: process.env.LOCAL_MYSQL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});


app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING");
})

app.use("/code", saveCodeRouter);
app.use("/version", saveVersionCodeRouter);

