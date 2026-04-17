import express from "express";
const router = express.Router();



router.get("/save-version", (req, res) => {
    // Get the req params
    // query the db

    // send the response to front end
    res.send({message: "working"});

});


export default router;



