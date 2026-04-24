import express from "express";
const router = express.Router();


router.post(("/save-version"), (req, res) => {
    // Get the req params
    const { versionName, linkID } = req.body;
    // query the db

    // send the response to front end
    res.send({ message: "working" });
});

router.post(("/fetch-version-blocks"), (req, res) => {
    res.send({ message: "FETCHING WORKS" });
});


export default router;



