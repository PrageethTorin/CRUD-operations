const express = require('express');
const router = express.Router();
const { getSalary, createSalary, salaryGetById, updateSalary, deleteSalaryById } = require('../controllers/salaryController')

router.get('/getSalary', getSalary)
router.post('/CreateSalary', createSalary)
router.get('/getSalary/:id', salaryGetById)
router.put('/updateSal/:id', updateSalary)
router.delete('/deleteSal/:id', deleteSalaryById)

module.exports = router;