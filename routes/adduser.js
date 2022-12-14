// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/adduser', (req, res) => {
    res.status(200).render('adduser', {pageTitle: "Add new user"});
});

module.exports = router;