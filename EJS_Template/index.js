const express = require('express')
const path = require('path')
const app= express()
const port = 3000

app.use(express.static(path.join(__dirname,'/public'))) //  use this path.js  when we acces our file from outside of folden then 
                                    // this path will let it konow where our public folder is 

app.listen(port,()=>{
    console.log(`listning on port ${port}`)
})

app.set("view engine",'ejs')
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{

    res.render('home')// similar to home.ejs  sins express search  and goes to Views Folder then  check home.js
})
app.get('/home',(req,res)=>{
    res.send('Ho iam working ')
})

// sending data from data base to my ejs  , rooldice  page  
app.get('/rooldice',(req,res)=>{
    let dice = Math.floor(Math.random()*6) +1 //  assume this value is comming from database
    res.render('rooldice.ejs',{
        dice // if key and value are same then we use only  single name 
    })
})

///**************************************************8 */

//***** Basic Examel of creating  Intagram based   Template for different users  */

app.get('/ig/:username',(req,res)=>{
    let {username} = req.params;
    const instaData = require('./data.json')
    const data = instaData[username]
    console.log(data)
    // to takcle erro  or  show detail only for data availage 

    if(data){
        res.render('instagram.ejs',{data})
    }
    else{
        res.render('error.ejs')
    }
})