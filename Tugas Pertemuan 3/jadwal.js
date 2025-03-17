const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get jadwal`);
});

router.post("/inputjadwal", (req,res)=> {
    res.send(`Ini halaman input jadwal`);
});

router.put("/editjadwal", (req,res)=> {
    res.send(`Ini halaman edit jadwal`);
});

router.delete("/hapusjadwal", (req,res)=> {
    res.send(`Ini halaman delete jadwal`);
});

module.exports = router;