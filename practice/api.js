let url= "https://catfact.ninja/fact  "

let body= document.querySelector('body')
let p = document.createElement('p')
let p2= document.createElement('p')

let bt= document.querySelector('button').addEventListener('click',async ()=>{
    let facts = await getFacts()
    let axiFatcs = await getAxiFacts()

    p2.innerHTML=`<strong>2nd  Cat Fat</strong> : <br> ${axiFatcs} `    
     p.innerHTML= `<strong>First Cat Fat</strong> : <br> ${facts}` 
    document.body.appendChild(p)
    document.body.appendChild(p2)
})
// fetch(url).then((res)=>{
//     console.log("success",res.json().then((data)=>{
//         p=document.createTextNode(data.fact)
//         document.body.appendChild(p)
        
//             }))
// }).catch((error)=>{
//     console.log('erroer jenerated',error)
// })

//********************************************************** */

// Now use Asyn and Await

async function getFacts(){
    try{
        let res= await fetch(url)
    let data = await res.json()
    return  data.fact
    
    }catch(error){
        console.log('error generated',error)
        return 'No Facts '
    }
    
}getFacts()




///**********************************************- */

// another method is  Axios  
//axios 
async function getAxiFacts(){
    try{
        let res= await axios.get(url)
    console.log(res)
    return res.data.fact
    
    }catch(error){
        console.log('error generated',error)
          return 'No Facts '
    }
    
}getAxiFacts()




//Axios 
