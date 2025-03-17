const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get nilai`);
});

router.post("/inputnilai", (req,res)=> {
    res.send(`Ini halaman input nilai`);
});

router.put("/editnilai", (req,res)=> {
    res.send(`Ini halaman edit nilai`);
});

router.delete("/hapusnilai", (req,res)=> {
    res.send(`Ini halaman delete nilai`);
});

module.exports = router;