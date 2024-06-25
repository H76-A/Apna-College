const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOveride =  require("method-override");
const { v4: uuidv4 } = require('uuid');
app.use(methodOveride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));




// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dalta_ap",
  password: "admin",
});

// Inserting New data
let q = "INSERT INTO user(id,username,email,passowrd) VALUES ?"; // these qurestion marks vill be replaced with dynamic value passed later
// let user = [
//   // if we use array like entring data then in value we use single question mark,
//   ["1", "newone", "nenw@mgail", "this"],
//   ["2", "old", "old@mail", "that"],
// ]; // e.g these are value that will replace ? mark

/************************************************************* */
// to get bulk data from database or now using facker  first convert our ovject to an array  like bellow
let getRandUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let getRandUser= ()=> {
//     return {
//       Id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),

//       password: faker.internet.password(),
//         };
//   }

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM USER";
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    res.send("Some Error Generated");
  }
});

// route for uers
app.get("/user", (req, res) => {
  let q = "SELECT * FROM USER";
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let data = result;
      res.render("users.ejs", { data });
    });
  } catch (error) {
    res.send("Some Error Generated");
  }
});

// to edit our Route
app.get("/user/:id/edit", (req, res) => {
  let id = req.params;
  let q = `SELECT * FROM user WHERE ID = '${id.id}'`; // we have to make it a quote since qutes are written in string

  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      res.render("edit.ejs", { user });
      
    });
  } catch (error) {
    res.send("Some Error Generated");
  }
});

// Update data in DB database


// to Update certain Field of Route 
app.patch("/user/:id", (req, res) => {
  let id = req.params;
  let q = `SELECT * FROM user WHERE ID = '${id.id}'`; 
  let {password:formPass,username:newUser}= req.body;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];

      if(formPass = user.passowrd){  // authentication for user password 
        let q2 = `UPDATE user SET username = '${newUser}'  WHERE ID = '${id.id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect('/user')
        })
      }
      else{
        
        res.send('Wrong Password')
      }
    });
  } catch (error) {
    res.send("Some Error Generated");
  }
});

// Remove User from Database
app.patch("/user/:id", (req, res) => {
  let id = req.params;
  let q = `DELETE FROM user WHERE ID = '${id.id}'`; 
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
       let user = result[0];
       console.log(user)
      res.redirect('/user')
    });
  } catch (error) {
    res.send("Some Error Generated");
  }
});


app.get('/user/new_user',(req,res)=>{
  res.render('new_user.ejs')
})
app.post('/user',(req,res)=>{
  console.log('updated')
  let {username:newUser,email:formEmail,password:formPass,}= req.body;
  let q = `INSERT INTO user VALUES('${uuidv4()}','${newUser}','${formEmail}','${formPass}')`;
 
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    res.redirect('/user')
  })
  }
  catch(err){
    res.send("Try Again ")
  }

})
app.listen("3000", () => {
  console.log("app is listning on poard 3000");
});

// let data = []
// for(let i =1;i<=100;i++){

//   data.push(getRandUser())
//   console.log(data)
// }
// try {
//   connection.query(q, [data], (error, result) => {
//     // pass q, then user  here q will take data from user and put in place or ? mark ,
//     if (error) throw error;
//     console.log(result);
//   });
// } catch (error) {
//   console.log(error);
// }

// connection.end()
