const express=require("express")
const app=express();






app.get("/",(req,res)=>{
    res.send("Hello from Panjob Camp")
})





app.listen(3000, ()=>{
    console.log(`Serving on port 3000`);
})