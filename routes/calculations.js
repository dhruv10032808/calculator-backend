const express=require('express');
const calculatorController=require('../controllers/calculations')
const router=express.Router();

router.post('/post-calculation',calculatorController.postCalculation);

router.get('/get-calculation',calculatorController.getCalculation)

router.use(`/delete-calculation/:calcId`,calculatorController.deleteCalculation)

module.exports=router;