
// here we make the logic using forlop dom, window object 

var n1 = document.getElementById(`n1`) //1st we target every element in my document
var color1 = document.getElementById(`color1`)

var submit1 = document.getElementById(`submit1`)
var outputdiv = document.getElementById(`outputdiv`)
var r1 = document.getElementById(`r1`)


submit1.addEventListener(`click`,()=>{   // addEventlisiner when we call event or add and functionality to use this. here 1st is event name 2nd is call back function
    outputdiv.innerHTML = '';


    var v1 = Number(n1.value)
    var v2 = color1.value
    console.log(`${v1}`);
    for (var index = 1; index <=v1; index++) {
       var v3 = document.createElement(`div`)
    console.log(`${v3}`);
    v3.setAttribute(`class`,`divmania`)
    v3.innerText = `${index}`
    v3.style.backgroundColor = `${v2}`
    outputdiv.append(v3)
}

})

r1.addEventListener(`click`,()=>{
    window.location.reload()
})

