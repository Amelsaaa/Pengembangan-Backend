const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get guru`);
});

router.post("/inputguru", (req,res)=> {
    res.send(`Ini halaman input guru`);
});

router.put("/editguru", (req,res)=> {
    res.send(`Ini halaman edit guru`);
});

router.delete("/hapusguru", (req,res)=> {
    res.send(`Ini halaman delete guru`);
});

module.exports = router;