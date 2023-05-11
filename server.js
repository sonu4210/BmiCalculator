const express= require('express')
const bodyParser= require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator" ,function(req,res){

    res.sendFile(__dirname+"/bmicalculator.html")

});

app.post("/bmicalculator", function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi= weight/(height*height);
    res.send("your bmi is"+bmi)

});

app.listen(3000 ,function(){
    console.log('started from thr server no we here')
})