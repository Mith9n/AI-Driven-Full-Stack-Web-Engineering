const title = document.getElementById("title");
title.innerText ="Maruf , welcome to DOM";
const message = document.getElementById("message");

const items = document.getElementsByClassName("item");

const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");






const  Id = document.getElementById("text");
 const cng = document.getElementById("cng");
 
 cng.addEventListener("click", function(){
    Id.textContent = "New Text";
 })

 window.confirm("Are you sure?");
 window.prompt("Enter name:");
