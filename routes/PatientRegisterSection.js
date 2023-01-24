// GET /app/settings         -> go the settings

const express = require('express');
const router = express.Router();

var {scoreOfDisease, Disease} = require('../server/models/doctor.js');

router.get('/app/PatientRegisterSection', (req, res) => {
    console.log('Unit Test for check patient registarion Route ');
    res.status(200).render('PatientRegisterSection', {pageTitle: "Patient PatientRegisterSection"});
});

module.exports = router;
