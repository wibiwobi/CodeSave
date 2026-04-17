import express from "express";
const router = express.Router();
import { db } from "./server.js";



router.get("/save-code", (req, res) => {
    console.log("HEllo");

});


export default router;



