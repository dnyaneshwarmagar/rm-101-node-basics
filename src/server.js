// install and import express
const express = () => {
    return require("express")()
};
// const express = require("express")
let app = express();
const path = require("path")

// Code here
app.get("/",(req,res)=>{
    try {      
        return res.status(200).sendFile(path.join(__dirname,'/assets/users.html'))
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

console.log("dir",__dirname)
app.listen(8000,()=>{
    try{
        console.log("listening on port 8000!")
    }catch(err){
        console.log(err)
    }
})
// Note: Do not remove this export statement
module.exports = app;
