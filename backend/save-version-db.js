import express from "express";
const router = express.Router();



router.post(("/save-version"), (req, res) => {
    // Get the req params
    const { versionName, linkID } = req.body;
    // query the db

    // send the response to front end
    res.send({ message: "working" });

});


export default router;



