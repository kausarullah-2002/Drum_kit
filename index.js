
var a = document.querySelectorAll(".drum").length;


for(var i = 0; i< a; i++)
{  
    document.querySelectorAll("button")[i].addEventListener("click" , handleClick);
    function handleClick () {
        alert(this.innerText  + " is pressed");
        }    
}
