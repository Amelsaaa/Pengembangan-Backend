const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get mapel`);
});

router.post("/inputmapel", (req,res)=> {
    res.send(`Ini halaman input mapel`);
});

router.put("/editmapel", (req,res)=> {
    res.send(`Ini halaman edit mapel`);
});

router.delete("/hapusmapel", (req,res)=> {
    res.send(`Ini halaman delete mapel`);
});

module.exports = router;