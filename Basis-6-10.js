                                                                                                                                       
window.onmousemove = function (e)                                                                                                              
{                                                                                                                                      
    var x = e.pageX,                                                                                                                    
    y = e.pageY;                                                                                                                       
    moveThis.style.top = (y - 50);                                                                                                     
    moveThis.style.left =(x - 50);                                                                                                
}; 

window.onload = function() { 
    console.log('eerste'); 
    setTimeout(intervalRoutine2, 1);
    intervalRoutine();
}

intervalRoutine2 = function () {
    console.log('tweede');
    if(tijd == true) {                                                                                                                     
        timeleft--;   
        moveThis.style.zIndex = 7;                                                                                                                          
        document.getElementById("countdowntimer").textContent = timeleft;                                                                                
        if(timeleft <= 0) {
            window.location.replace("../Game Over/Game Over.html");  
        }   

    	if (timeleft <= 9){                                                                                                                                                                           
            document.getElementById("tijd").style.left = 110 + "px";                                                                           
        }
    }
    setTimeout(intervalRoutine2, 1000);
}

intervalRoutine = function () {
    console.log('derde');                                                                                                           
    var blokje = document.getElementById('finish');                                                                                                                                                                 
    var xy = getRandomPosition(blokje);                                                                                                                                                                       
    blokje.style.top = xy[0] + 'px';                                                                                                    
    blokje.style.left = xy[1] + 'px';                                                                                                                                                                                                 
}

                                                                                                                                
var moveThis = document.getElementById('flash');                                                                                                                                                        
console.log(window);

                                                                                                                                        
var clicks = 0                                                                                                                         
function clicker()                                                                                                                      
{                                                                                                                                       
    clicks += 1;                                                                                                                        
    document.getElementById('clicks').innerHTML = clicks;                                                                              
    document.getElementById('zoeksleutel').style.display="none";                                                                        
}                                                                                                                                      

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
                      
                                                                                                                       
      
var bok = document.getElementById('flash')                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
function getRandomPosition(element) {
    var x = document.body.offsetHeight-element.clientHeight;
    var y = document.body.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}                                                                                                                                       
                                                                                                                                        
                                                                                                                                  

