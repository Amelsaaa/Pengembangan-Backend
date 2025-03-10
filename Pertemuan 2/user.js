const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`get data user`);
});

router.get("/:id", (req,res)=> {
    res.send(`user ID : ${req.params.id}`);
});

module.exports = router;