// const express = require("express");
// const router = express.Router();


// //Import Controller
// const { dummyLink, likePost, unlikePost } = require("../controllers/LikeController");

// //Mapping Create
// router.get("/dummyroute", dummyLink);

const express = require('express');
const router = express.Router();

// Import Controller 
const {createComment} = require("../controllers/commentController");

// Mapping Create
router.post("/comments/create",createComment)

// Export Controller
module.exports = router;