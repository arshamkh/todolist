
function get(){
let bt = document.querySelector("#bt")
let res = document.querySelector(".res")
let inp = document.getElementById("inp").value;
let emt = document.getElementById("inp").value = "";

    let txt = document.createTextNode(inp)
    let span = document.createElement("span")
    let p = document.createElement("p")
    span.appendChild(txt);
    p.appendChild(span)
    res.appendChild(p);
    let removetxt = document.createTextNode("   X")
    let removespan =document.createElement("span")
    removespan.appendChild(removetxt)
    p.appendChild(removespan)
    removespan.style.marginLeft = "100px";;
    removespan.style.fontSize = "30px";
    removespan.style.color = "red";
    removespan.style.fontWeight = "bold";
    span.style.fontSize = "25px"



    span.addEventListener("click",line)

    function line(){
        span.style.textDecoration = "line-through";
        span.style.color = "green"
        
    
    }
    
    span.addEventListener("mouseover" , sty =>{
        span.style.cursor = "pointer"
    })
    let pak = document.createAttribute("onclick");
    pak.value = "this.parentNode.remove();";
    removespan.setAttributeNode(pak);
    removespan.addEventListener("mouseover" , style =>{
        removespan.style.cursor = "pointer"
    })
    
    

}
