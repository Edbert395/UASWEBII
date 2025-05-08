const express = require("express");
const { createSIM, getAllSIM, getSIMById, updateSIMById, deleteSIMById } = require("../controllers/dataSIMController");

const router = express.Router();

router.post("/", createSIM);
router.get("/", getAllSIM);
router.get("/:id", getSIMById);
router.put("/:id", updateSIMById);
router.delete("/:id", deleteSIMById);

module.exports = router;