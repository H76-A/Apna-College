const express = require('express')
const app = express()
const port = 3000;
const path  = require('path')

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))

const {v4:uuidv4} = require('uuid')



let posts = [
    {
        id:uuidv4(),
        username:'Muhammad Anee',
        content: "I want to love coadint"
    },
    {
        id:uuidv4(),
        username:'Example',
        content: "Without hard work cant achive anything"
    }
]
app.get('/posts',(req,res)=>{
   res.render('index.ejs',{posts})
})


// now to add new post to our arrya first we make a new view and then add out api to i t

app.get('/posts/new',(req,res)=>{
    res.render('newpost.ejs')

})

app.post('/posts',(req,res)=>{
    let {username,content,id}=req.body;
    console.log(req.body)
    posts.push({username,content,id:uuidv4()})
    res.redirect('/posts')
    console.log(posts)
})

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id==p.id)
    console.log(id)
    
    res.render('show.ejs',{post})
})

app.listen(port,()=>{
    console.log('listning on port ',port)
})
