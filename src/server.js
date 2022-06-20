// install and import express
const express = () => {
    return require("express")()
};
// const express = require("express")
let app = express();

const path = require("path");
const users = require("./assets/user.json")

// Code here
app.get("/",(req,res)=>{
    try {      
        return res.status(200).sendFile(path.join(__dirname,'/assets/users.html'))
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

app.get("/users",(req,res)=>{
    try {      
        return res.status(200).sendFile(path.join(__dirname,'/assets/user.json'))
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})
app.get("/users/:id",(req,res)=>{
    let id = req.params.id;
    let user = users.filter((el)=> el.id == id )
    // console.log(id,user)
    try {      
        return res.status(200).send(user[0])
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})
app.post("/users",(req,res)=>{
    try {      
        return res.status(200).sendFile(path.join(__dirname,'/assets/user.json'))
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})


app.listen(8000,()=>{
    try{
        console.log("listening on port 8000!")
    }catch(err){
        console.log(err)
    }
})
// Note: Do not remove this export statement
module.exports = app;
