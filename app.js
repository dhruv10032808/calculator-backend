const express=require('express');
const calculatorRoutes=require('./routes/calculations')
const parsedBody=require('body-parser')
const cors=require('cors')
const sequelize=require('./util/database');

const app=express();
app.use(cors());
app.use(parsedBody.json());
app.use(parsedBody.urlencoded({ extended: true }));
app.use(calculatorRoutes)

sequelize.sync().then(()=>{
    app.listen(3000);
})
.catch(err=>console.log(err))