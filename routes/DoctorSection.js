// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('../server/models/doctor.js');

router.get('/app/DoctorSection', (req, res) => {

  
    res.status(200).render('DoctorSection', {pageTitle: ""});
});

module.exports = router;
