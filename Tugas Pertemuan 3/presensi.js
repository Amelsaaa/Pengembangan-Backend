const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get presensi`);
});

router.post("/inputpresensi", (req,res)=> {
    res.send(`Ini halaman input presensi`);
});

router.put("/editpresensi", (req,res)=> {
    res.send(`Ini halaman edit presensi`);
});

router.delete("/hapuspresensi", (req,res)=> {
    res.send(`Ini halaman delete presensi`);
});

module.exports = router;