const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get siswa`);
});

router.post("/inputsiswa", (req,res)=> {
    res.send(`Ini halaman input siswa`);
});

router.put("/editsiswa", (req,res)=> {
    res.send(`Ini halaman edit siswa`);
});

router.delete("/hapussiswa", (req,res)=> {
    res.send(`Ini halaman delete siswa`);
});

module.exports = router;