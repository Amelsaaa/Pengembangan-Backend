const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get kelas`);
});

router.post("/inputkelas", (req,res)=> {
    res.send(`Ini halaman input kelas`);
});

router.put("/editkelas", (req,res)=> {
    res.send(`Ini halaman edit kelas`);
});

router.delete("/hapuskelas", (req,res)=> {
    res.send(`Ini halaman delete kelas`);
});

module.exports = router;