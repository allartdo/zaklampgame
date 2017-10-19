                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
onmousemove = function (e)                                                                                                              //Op het moment dat de muis beweegt activeert hij de functie.                                                //
{                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var x = e.pageX,                                                                                                                    //e.pageX krijgt de naam x                                                                                   //
    y = e.pageY;                                                                                                                        //e.pageY krijgt de naam y                                                                                   //
    moveThis.style.top = (y - 100);                                                                                                     //moveThis (id "flash") pakt vanaf y = 0 nu y = -100.                                                        //
    moveThis.style.left =(x - 100); 
    console.log(tijd)                                                                                                                   //moveThis (id "flash") pakt vanaf x = 0 nu x = -100.                                                        //
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
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                            
var timeleft = 15;
var tijd = true;
console.log(tijd);

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
                                                                                                                                       //hier wordt een nieuwe variabel gemaakt (timeleft) en zetten we op 15 seconden.                             // 
function setInterval(){
    setTimeout(setInterval, 1000);
        if(tijd == true){
            bok.style.zIndex = 1;                                                                                                                       //de setinterval functie wordt Timer.                                                                        //
            timeleft--;                                                                                                                             //elke seconde gaat er 1 van timeleft af (15-14-13-12-11-10)                                                 //
            document.getElementById("countdowntimer").textContent = timeleft; 
            document.getElementById('start').style.display='none'                                                                                                                                        //id countdowntimer wordt timeleft. dus hij verrandert elke seconde.                                         //
        if(timeleft <= 0){                                                                                                                       //als timeleft kleiner is dan 0...                                                                           //
            window.location.replace("file:///D:/lamp/zaklampgame/Hole%20Game/Flashlight-Shizzle.html");  
}                                                                                                                                           //gaat hij naar de aangegeven locatie.                                                                       //
if (timeleft <= 9){                                                                                                                     //als timeleft kleiner is dan 9...                                                                           //                                                      
    document.getElementById("tijd").style.left = 110 + "px";                                                                            //wordt hij 110px vanaf links. dus 110 naar rechts. van het div blokje waar hij in zit.                      //
}}}


var bok = document.getElementById('flash')

function Next(){
    bok.style.zIndex = 94;
    document.getElementById('nextlevel').style.display='block'
}
                                                                                                                                        //hier stellen we in dat hij om de 1000 ms gaat (1 sec)                                                      //
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getRandomPosition(element) {                                                                                                   //hier pakt hij de functie met de naam getRandomPosition(element) element = blokje                           //
    var x = document.body.offsetHeight-element.clientHeight;                                                                            //hij pakt van de body de offsetheight en dan - element(blokje) clientheight. dit wordt dus nu x             //
    var y = document.body.offsetWidth-element.clientWidth;                                                                              //hij pakt van de body de offsetwidth en dan - element(blokje) clientwidth. en dit y                         //
    var randomX = Math.floor(Math.random()*x);                                                                                          //math.floor rond het getal af. math random pakt een random nummer tussen 0 en 1 en die 2 samen keer x       //
    var randomY = Math.floor(Math.random()*y);                                                                                          //math.floor rond het getal af. math random pakt een random nummer tussen 0 en 1 en die 2 samen keer y       //
    return [randomX,randomY];                                                                                                           //hij stopt de functie's en slaat de randomX en Y op voor hergebruik.                                        //                                                                                             
}                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {                                                                                                           //zodra de pagina laad voert hij deze functie uit in plaats van de hele tijd.                                //
    var blokje = document.getElementById('finish');                                                                                     //blokje = id "finish"                                                                                       //
    var blokje2 = document.getElementById('zoeksleutel');                                                                               //blokje2 = id "key"                                                                                         //
    var xy = getRandomPosition(blokje);                                                                                                 //getRandomPosition(blokje) wordt xy hij pakt de resultaten van de bovenste random position.                 //                                                                      
    blokje.style.top = xy[0] + 'px';                                                                                                    //hier word de top verrandert van wat er boven uitkomt                                                       //
    blokje.style.left = xy[1] + 'px';                                                                                                   //hier word de left verrandert van wat er boven uitkomt                                                      //
    blokje2.style.top = xy[1] + 'px';                                                                                                   //hier word de top verrandert van wat er boven uitkomt                                                       //
    blokje2.style.left = xy[0] + 'px';                                                                                                  //hier word de left verrandert van wat er boven uitkomt                                                      //
}                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

