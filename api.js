
let formss=document.getElementById("formsss")

 formss.addEventListener('submit',function(e){
e.preventDefault()
    let width=document.getElementById("width")
    let height=document.getElementById("height")

    let  image=document.getElementById("img")
    image.src="https://source.unsplash.com/random/${width}*${height}"
    
})