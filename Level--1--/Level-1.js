                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
onmousemove = function (e)                                                                                                              //Op het moment dat de muis beweegt activeert hij de functie.                                                //
{                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var x = e.pageX,                                                                                                                    //e.pageX krijgt de naam x                                                                                   //
    y = e.pageY;                                                                                                                        //e.pageY krijgt de naam y                                                                                   //
    moveThis.style.top = (y - 100);                                                                                                     //moveThis (id "flash") pakt vanaf y = 0 nu y = -100.                                                        //
    moveThis.style.left =(x - 100);                                                                                                     //moveThis (id "flash") pakt vanaf x = 0 nu x = -100.                                                        //
    };                                                                                                                                  //uiteindelijk dus in het midden van de circle pakt hij vast.                                                //
var moveThis = document.getElementById('flash');                                                                                        //hier wordt id "flash" moveThis.                                                                            //                            
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                             
var clicks = 0                                                                                                                          //de variable clicks staat nu op 0.                                                                          // 
function clicker()                                                                                                                      //hier roept hij de functie clicker aan (clicker is de <img>)                                                //
{                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    clicks += 1;                                                                                                                        //elke keer als je klikt telt hij 1 er bij op.                                                               //
    document.getElementById('clicks').innerHTML = clicks;                                                                               //de uitkomt van clicks komt op de plek van id clicks                                                        //
    document.getElementById('zoeksleutel').style.display="none";                                                                        //als je op id "key" klikt wordt de haalt hij hem weg van het scherm.                                        //
}                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


var timeleft = 15;
var tijd = true;


function pause(){
    tijd = false;
    bok.style.zIndex = 94;
    document.getElementById('resume').style.display='block';
}
function resume(){
    tijd = true;
    bok.style.zIndex = 1;
    document.getElementById('resume').style.display='none';
}
                                                                                                                                        
function setInterval(){
    setTimeout(setInterval, 1000);
        if(tijd == true){
            bok.style.zIndex = 1;                                                                                                                       
            timeleft--;                                                                                                                             
            document.getElementById("countdowntimer").textContent = timeleft; 
            document.getElementById('start').style.display='none'                                                                                
        if(timeleft <= 0){
            window.location.replace("../Game Over/Game Over.html");  
}                                                                                                                                           
if (timeleft <= 9){                                                                                                                                                                           
    document.getElementById("tijd").style.left = 110 + "px";                                                                           
}}}


var bok = document.getElementById('flash')

function next(){
    tijd = false;
    window.location.replace("../Level--2--/Level-2.html");
}
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
function getRandomPosition(element) {
    var x = document.body.offsetHeight-element.clientHeight;
    var y = document.body.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}                                                                                                                                       
                                                                                                                                        
window.onload = function () {                                                                                                           
    var blokje = document.getElementById('finish');                                                                                     
    var blokje2 = document.getElementById('zoeksleutel');                                                                               
    var xy = getRandomPosition(blokje);                                                                                                                                                                       
    blokje.style.top = xy[0] + 'px';                                                                                                    
    blokje.style.left = xy[1] + 'px';                                                                                                   
    blokje2.style.top = xy[1] + 'px';                                                                                                   
    blokje2.style.left = xy[0] + 'px';                                                                                                  
}                                                                                                                                       
                                                                                                                                        

