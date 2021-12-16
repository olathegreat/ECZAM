var whitebutton = document.querySelector(".whitebutton");
var bluebutton = document.querySelector(".bluebutton");
var blackbutton = document.querySelector(".blackbutton");
var img = document.querySelector(".img");
var toggle = false;

whitebutton.addEventListener("click", function(){
    img.classList.add("animated");
    img.classList.add("jello");
    if(toggle){
        document.body.style.background = "rgba(3, 24, 63, 0.952)";


    }
    else if(toggle){
        document.body.style.background = "rgb(10, 10, 10)";
    }
    else{
        document.body.style.background = "rgb(182, 19, 19)";
        img.src = "resources/images/whitecan22.png"
       
    }
   
});

blackbutton.addEventListener("click", function(){
    if(toggle){
        document.body.style.background = "rgba(3, 24, 63, 0.952)";


    }
    else if(toggle){
        document.body.style.background = "rgb(182, 19, 19)";
        
    }
    else{
        document.body.style.background = "rgb(10, 10, 10)";
        img.src = "resources/images/blackpepsi1.png"
        img.classList.add("animated");
        img.classList.add("tada");
    }
});



bluebutton.addEventListener("click", function(){
    if(toggle){
        document.body.style.background = "rgb(10, 10, 10)";


    }
    else if(toggle){
        document.body.style.background = "rgb(182, 19, 19)";
    }
    else{
        document.body.style.background = "rgba(3, 24, 63, 0.952)";
        img.src = "resources/images/bluecan.png"
        img.classList.add("animated");
        img.classList.add("pulse");
    }
});
