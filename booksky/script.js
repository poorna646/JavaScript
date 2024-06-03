//for opening the popup
var add1 = document.querySelector(".pop_overlay")
var add2 = document.querySelector(".pop_container")
var addpopbutton = document.getElementById("pop_up")

addpopbutton.addEventListener("click",function(){
    add1.style.display="block"
    add2.style.display="block"
})

//for closing the popup
var cls = document.getElementById("closes")

cls.addEventListener("click",function()
{
    add1.style.display="none"
    add2.style.display="none"
})

//for deleting
var del1=document.querySelector(".container")
var del2=document.querySelector(".book-container")
var delbtn = document.getElementById("deleting")

delbtn.addEventListener("click",function()
{
    del1.style.display="none"
    del2.style.display="none"
})

//for adding new book
//select container, booktitle,book_auth,desc,add_book
var container = document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title = document.getElementById("booktitle")
var book_auth = document.getElementById("book_auth")
var desc = document.getElementById("desc")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${book_auth.value}</h5>
            <p>${desc.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    add1.style.display="none"
    add2.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}