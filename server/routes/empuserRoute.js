const express = require('express');
const router = express.Router();
const {  users,
    getEmpUserById,
    updateUser,
    deleteUser,
    createUser } = require('../controllers/userController')

router.get('/users', users)
router.post('/createUser', createUser)
router.get('/getEmpuser/:id', getEmpUserById)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;