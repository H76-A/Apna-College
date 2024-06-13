
const express =require('express')
const app = express()
const port = 3000


app.listen(port,()=>{
 console.log("listeirng on port ",port)
})
app.use(express.urlencoded({extends:true})) // write this to get data from post  to let exprees now aobut data
app.use(express.json()) // to sned json  data 
app.get('/register',(req,res)=>{
    res.send("Standerd Get Respones")
})

app.post('/register',(req,res)=>{
    let {user,pass}=  req.body// when we  want to use post we always use req.body
    res.send(`Helllo welcome  ${user}`)
})