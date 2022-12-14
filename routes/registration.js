// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/registration', (req, res) => {
    res.status(200).render('registration', {pageTitle: "Patient Registration"});
});

module.exports = router;
