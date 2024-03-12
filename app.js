//selecting items
let form=document.querySelector(".grocery-form")
let alert=document.querySelector(".alert")
let grocery=document.getElementById("grocery")
let submitbtn=document.querySelector(".submit-btn")
let container=document.querySelector(".grocery-container")
let list=document.querySelector(".grocery-list")
let clearBtn=document.querySelector(".clear-btn")
//Edit options
let editElement
let editFlag=false
let editId=""
//event listeners
form.addEventListener("submit",addItems)
//clearBtn.addEventListener("click")
//load items
//window.addEventListener("DOMContentLoaded")
//functions
function addItems(e){
  e.preventDefault()
  const value =grocery.value
  const id =new Date().getTime().toString()
  if(value !== "" && editFlag===false){
    console.log('An item has been added to your list')
  }
  else if(value !=="" && editFlag===true){
    console.log('Editing')
  }
  else{
    console.log('Trying to submit an empty form')
  }
}