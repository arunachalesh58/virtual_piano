var num=document.querySelectorAll(".piano").length;
for(var i=0;i<num;i++){
document.querySelectorAll(".piano")[i].addEventListener("click" ,function(){
    var key=this.innerHTML;
    makesound(key);
    buttonani(key);
});
}
document.addEventListener("keypress",function(event){
var key=event.key;
console.log(key);
makesound(key);
buttonani(key);

});
function makesound(key){
    switch (key) {
        case "z":
            var audio = new Audio('./sounds/sa.mp3');
            audio.play();
            break;
        case "x":
            var audio = new Audio('./sounds/re.mp3');
            audio.play();
            break;
        case "c":
            var audio = new Audio('./sounds/ga.mp3');
            audio.play();
            break;
        case "v":
            var audio = new Audio('./sounds/ma.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('./sounds/pa.mp3');
            audio.play();
            break;        
        case "n":
            var audio = new Audio('./sounds/da.mp3');
            audio.play();
            break;
        case "m":
            var audio = new Audio('./sounds/ne.mp3');
            audio.play();
            break;
        case ",":
            var audio = new Audio('./sounds/sae.mp3');
            audio.play();
            break;
          
    
        default:
            break;
    }
}

function buttonani(currentKey)
{
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100) 
}