function removeHiden(){
    document.getElementById("hiden").classList.remove("hiden")

}
 setTimeout(removeHiden,5000)

 function addHiden(){
    document.getElementById("hiden").classList.add("hiden")

}
 setTimeout(addHiden,20000)


function close(){
  let btnClose=document.getElementById("hiden")  
  btnClose.addEventListener("click", function() {
    document.getElementById("hiden").innerHTML=""
    
  })
}