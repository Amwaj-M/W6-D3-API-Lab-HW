// fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=H5iCDXEbEVk85GVELboA5PDADy24yfHH',{
//     method:"get"
// })
//     .then(response => response.json())
//     .then(data =>console.log(data));


let text = document.getElementById("text");
text.innerHTML="Welcome " + `  ${localStorage.getItem("username")} ! `

function apiFun() {
    fetch('https://655267bd5c69a7790329fff9.mockapi.io/books',{
        method:"get"
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for(let i = 0 ; i < data.length; i++) {
                let get_data =document.getElementById("get-data")

                let card = document.createElement("div");
                let but_del = document.createElement("button")
                but_del.className = "but_del"
                but_del.style.display= "none";
                card.className = "card"; 
                card.innerHTML =
                `
                <img src="${data[i].cover}">
                <h2>${data[i].title}</h2>            
                <h3> by: ${data[i].author}</h3>  
                `
                get_data.appendChild(card)
                card.appendChild(but_del)

                if(localStorage.getItem("username") === "Admin" ){
                    but_del.style.display= "block";
                    but_del.innerText = "Delet"
                    but_del.addEventListener('click',() => butDeletBook(data[i].id))
                }
            }
            
        })
        .catch((err)=> console.log(`the err is ${err}`))

} apiFun()

function butDeletBook(id) {
    fetch(`https://655267bd5c69a7790329fff9.mockapi.io/books/${id}`,{
        method :"DELETE"
    })
    .then(response => response.json())
        .then(data =>console.log(data));
}