// auth.js
const express = require("express");
const {saveInfo,loginUser} = require("./api/postApi");     
const router = express.Router();



// POST api
router.post("/save-info", saveInfo);
router.post("/login-User", loginUser);

module.exports = router;
