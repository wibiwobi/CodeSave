import express from "express";
import mysql2 from "mysql2/promise";
import "dotenv/confi";

const app = express();
app.use(express.json())
