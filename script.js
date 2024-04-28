

let container = document.getElementById("product-cont");
let data; 

async function getData() {
    try {
        let res = await fetch(`https://fakestoreapi.com/products`);
        data = await res.json();
        ShowData(data);
    } catch (error) {
        console.log("Error", error);
    }
}

function ShowData(arr) {
    container.innerHTML = "";
    arr.forEach(function(ele) {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.src = ele.image;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let price = document.createElement("h4");
        price.innerHTML = `$${ele.price}`; 

        card.append(image, title, price);
        container.append(card);
    });
}



let searchinput = document.getElementById("search-input");

let searchbtn = document.getElementById("search-btn");



function searchfun() {
   

let searchvalue = searchinput.value.trim().toLowerCase()

 let narr =   data.filter(function(ele){
       return  ele.title.toLowerCase().includes(searchvalue)

    })
    
if(narr.length === 0){ 
    container.innerHTML = "hi"
}
else{
    ShowData(narr)
}

}

searchbtn.addEventListener("click", searchfun);



function sortData(){
    

    let value = sort.value
    let narr;
    
   
        if(value === "asc" ){
            narr = data.sort(function(a,b){
                return a.price - b.price
            })
        }

    else if(value === "desc"){
        narr = data.sort(function(a,b){
            return b.price - a.price
        })
    }
    

    ShowData(narr)
}
   let sort = document.getElementById("sortbyprice")

   sort.addEventListener("change" , sortData)



   

function sortbycategory(){

    let value = sortbytype.value
   




}






   let sortbytype = document.getElementById("sortbytype")
  
   sortbytype.addEventListener("change" , sortbycategory)

getData();

