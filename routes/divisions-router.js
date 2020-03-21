const express = require('express')

const DivCtrl = require('../controllers/divisions-ctrl')

const router = express.Router()

router.post('/division', DivCtrl.createDivision)
router.put('/division/:id', DivCtrl.updateDivision)
router.delete('/division/:id', DivCtrl.deleteDivision)
router.get('/division/:id', DivCtrl.getDivisionById)
router.get('/divisions', DivCtrl.getDivisions)

module.exports = router