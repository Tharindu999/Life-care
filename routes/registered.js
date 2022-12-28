// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');

router.get('/app/registered', (req, res) => {
    console.log('Unit Test for check Registered patient Route ');
    res.status(200).render('registered', {pageTitle: "Registered patient"});
    
});

module.exports = router;
