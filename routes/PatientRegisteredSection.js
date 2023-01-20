// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('../server/models/doctor.js');

router.get('/app/PatientRegisteredSection', (req, res) => {
    
    res.status(200).render('PatientRegisteredSection', {pageTitle: ""});
    
});

module.exports = router;
