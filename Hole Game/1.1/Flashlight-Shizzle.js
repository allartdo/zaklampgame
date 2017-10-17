                                                                    //////////////////////////////////////////////////////////////////////////////////////////////
var left = 0,                                                       // Left is vanaf nu 0                                                                       //
reset = setInterval(goRight);                                       // id = setInterval(goRight, 0); setInterval zet een functie in milliseconden,              //
                                                                    // in dit geval gaat hij meteen al naar rechts                                              //
function goRight() {                                                // Functie "goRight()" wordt gepakt                                                         //
var circle = document.getElementById("flash");                      // Circle is ID"circle" nu weet hij dat hij dit ID moet pakken                              //
left++;                                                             // elke keer als ie de linker kant raakt gaat hij naar rechts                               //
circle.style.left = left + "px";                                    // Left = 0 + pixels dus de circle beweegt op pixels                                        //
if (left > 1670) {                                                  // Als Left kleiner is dan 1670px dan reset hij de snelheid en gaat hij de andere kant op   //
    clearInterval(reset);                                           // Hier zet hij de setInterval van goRight weer op 0 (wat hij al stond)                     //
    snelheid = setInterval(goLeft);                                 // Maakt een snelheid aan voor goLeft                                                       //
}}                                                                  // ---------------------------------------------------------------------------------------- //
                                                                    // ---------------------------------------------------------------------------------------- //
function goLeft() {                                                 // Pakt goLeft()                                                                            //
var circle = document.getElementById("flash");                      // Circle is ID"circle" nu weet hij dat hij dit ID moet pakken                              //
left -= 1;                                                          // elke keer als ie de rechter kant raakt gaat hij naar links                               //
circle.style.left = left + "px";                                    // Left = 0 + pixels dus de circle beweegt op pixels                                        //
if (left < 20) {                                                    // Als Left groter is dan 1px dan reset hij de snelheid en gaat hij de andere kant op       //
    clearInterval(snelheid);                                        // Hier zet hij de setInterval van goLeft weer op 0 (wat hij al stond)                      //
    reset = setInterval(goRight);                                   // Maakt een snelheid aan voor goRight                                                      //                         
}}                                                                  //////////////////////////////////////////////////////////////////////////////////////////////



