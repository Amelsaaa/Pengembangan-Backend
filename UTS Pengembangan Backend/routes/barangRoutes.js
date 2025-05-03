const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangControllers");

router.get("/update", barangController.updateDataWithTimestamp);
router.get("/", barangController.getAllBarangs);
router.get("/:id", barangController.getBarangById);
router.post("/", barangController.createBarang);
router.put("/:id", barangController.updateBarang);
router.delete("/:id", barangController.deleteBarang);

module.exports = router;
