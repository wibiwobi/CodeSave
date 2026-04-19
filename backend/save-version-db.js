import express from "express";
const router = express.Router();



<<<<<<< HEAD
router.post(("/save-version"), (req, res) => {
    // Get the req params
    const { versionName, linkID } = req.body;
    // query the db

    // send the response to front end
    res.send({ message: "working" });
=======
router.get("/save-version", (req, res) => {
    // Get the req params
    // query the db

    // send the response to front end
    res.send({message: "working"});
>>>>>>> version-saving

});


export default router;



