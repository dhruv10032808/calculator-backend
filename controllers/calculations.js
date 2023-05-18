const Calculator=require('../models/calculator')
exports.postCalculation=(req,res)=>{
console.log(req.body.calculation);
let result=eval(req.body.calculation)
    Calculator.create({
       calculation:req.body.calculation,
       result:result
    }).then((output)=>{
        console.log(output)
        res.status(201).json(output);
    }).catch((err)=>{
        console.log(err);
    })
}

exports.getCalculation=(req,res)=>{
    Calculator.findAll().then(calculations=>{
        res.status(201).json(calculations);
    })
}

exports.deleteCalculation=(req,res)=>{
    const calcId=req.params.calcId;
    Calculator.destroy({where:{id:calcId}}).then(()=>{
       console.log('Deleted Successfully')
    }).catch(err=>{
        console.log(err);
    })
}