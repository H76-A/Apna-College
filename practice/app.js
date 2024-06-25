// Imporeved version of Call back Hell

// Promisses used

// let p = document.querySelector("p");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       p.style.backgroundColor = color;
//       resolve()
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => {
//     console.log("Red color changed");
//     return changeColor("Blue", 1000);
//   })
//   .then(() => {
//     console.log("Blue Color is change");
//     return changeColor("Green", 1000);
//   })
//   .then(() => {
//     console.log("last Color done");
//   })
//   .catch(() => {
//     console.log("NO Color Changed");
//   });

  
// function saveDb(data) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   return new Promise((resolve, reject) => {
//     if (internet >= 4) {
//       resolve("Success: Data is passed ", data);
//     } else {
//       reject("Slow Internet Connection ", data);
//     }
//   });
// }

// saveDb("Muhammad Anees")
//   .then((result) => {
//     console.log("this is Passed");
//     console.log(`Result: ${result}`)
//     return saveDb("2nd data ");
//   })
//   .then((result) => {
//     console.log("2nd data is save");
//     console.log(`Result: ${result}`)
//     return saveDb("3rd one ");
//   })
//   .then((result) => {
//     console.log("3rd data is saved ");
//     console.log(`Result: ${result}`)

//   })
//   .catch((error) => {
//     console.log("this is failed");
//     console.log(`Error: ${error}`)
//   });

// Promises Ended Here



//*************************************************************************************** */


// Asyn Function Started 


async function greed(){
    console.log("hello")
}

console.log(greed)

