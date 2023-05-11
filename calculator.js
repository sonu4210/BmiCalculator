const express= require('express')
const bodyParser= require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/bmicalculator" ,function(req,res){

    res.sendFile(__dirname+"/bmiCalculator.html")

});

app.post("/bmicalculator", function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi= weight/(height*height);
    res.send("your bmi is"+bmi)

});

app.listen(3000 ,function(){
    console.log('started from the server no we here 3k')
})