
const express = require('express');
const router = express.Router();

// Import Controller 
const {dummyLink} = require("../controllers/likeController");

// Mapping Create
router.post("/dummyroute",dummyLink)

// Export Controller
module.exports = router;