const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res)=> {
    res.send(`Ini halaman get user`);
});

router.post("/inputuser", (req,res)=> {
    res.send(`Ini halaman input user`);
});

router.put("/edituser", (req,res)=> {
    res.send(`Ini halaman edit user`);
});

router.delete("/hapususer", (req,res)=> {
    res.send(`Ini halaman delete user`);
});

module.exports = router;