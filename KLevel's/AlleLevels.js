onmousemove = function (e)                                                                                                              //Op het moment dat de muis beweegt activeert hij de functie.                                                //
{                                                                                                                                       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var x = e.pageX,                                                                                                                    //e.pageX krijgt de naam x                                                                                   //
    y = e.pageY;                                                                                                                        //e.pageY krijgt de naam y                                                                                   //
    moveThis.style.top = (y - 100);                                                                                                     //moveThis (id "flash") pakt vanaf y = 0 nu y = -100.                                                        //
    moveThis.style.left =(x - 100);                                                                                                                 //moveThis (id "flash") pakt vanaf x = 0 nu x = -100.                                                        //
};                                                                                                                                      //uiteindelijk dus in het midden van de circle pakt hij vast.                                                //
var moveThis = document.getElementById('flash');  

