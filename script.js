let container = document.getElementById("product-cont")



 async function getData(){
 try {
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data =await res.json()
    
    ShowData(data)
     


 } catch (error) {
    console.log("Eroor" , error)
 }
}



function ShowData(arr){
    container.innerHTML =""
    arr.forEach(function(ele,i){

        let card = document.createElement("div")
        let image = document.createElement("img")    
        image.src = ele.image

        let title = document.createElement("h3")
        title.innerHTML = ele.title
        
        let price = document.createElement("h4")
        price.innerHTML = ele.price
        card.append(image,title,price)
        container.append(card)

    })
}



let searchinput = document.getElementById("search-input")

let searchbtn = document.getElementById("search-btn")


// function searchfun(data){
// container.innerHTML =""
//    let narr = data.filter(function(ele){
//      return ele.title === searchinput.value
//    })

//    ShowData(narr)
// }

// searchbtn.addEventListener("click" , function(){
//     searchfun()
// })



getData()