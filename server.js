const express=require('express');
const app=express();
app.get("/",function(req,res)
{
  res.send("NAME:NAMITA DEWANGAN, AGE:25,COURSE:PG-DAC ");
});
app.get("/about",function(req,res){
res.sendfile(__dirname+"/index.html");
});
app.listen(9000,function(req,res)
{
  console.log("PG_DAC");
});