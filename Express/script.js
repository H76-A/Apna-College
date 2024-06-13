
const express =require('express')

const app = express()
const port = 3001;


// app.use((req,res)=>{
//     console.log("Hello i anm here")

//     res.send("<h1>This is my response</h1>")
// })
app.listen(port,()=>{
    console.log(`app listnign on port ${port}`)
})

app.get('/',(req,res)=>{

 res.send('<h1>After Completing Nodemon</h1>')
})


//**************************************88 */

// use of different routes

app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.get('/serach',(req,res)=>{
    res.send("My Seraches will Show Here")
})
app.get('/serach/ser',(req,res)=>{
    res.send("Serach within a search ")
})

// app.get('*',(req,res)=>{
//     res.send("Path does not exist")
// })

//**********************************8  ends here  */

/************************************************************* */

// Now use of Path parameter


app.get('/:username/:id',(req,res)=>{
    console.log(req.params)
    let {username,id} = req.params;
    res.send(`Welcome to your accoutn ${username} ${id}`)
   })

   //**************** Use of Query String  */
   app.get('/change',(req,res)=>{
  
    let {q} = req.query
    
    res.send(`Reasults for our Quary ${q}`)
   })