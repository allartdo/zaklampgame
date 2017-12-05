<?php
    $leveltime = 10;
?>
<!DOCTYPE>
<html>

    <head> 
            <meta charset="utf-8">
            <title>Level 2</title>
            <link rel="stylesheet" type="text/css" href="./Level-2.css">
            <link rel="stylesheet" type="text/css" href="../Basis-1-5.css">
            <script type="text/javascript" src="../Basis-1-5.js"></script> 
            <script> var timeleft = 11; 
                    function next(){
                        tijd = false;
                        window.location.replace("../Level--3--/Level-3.html");
                    }
            </script> 
    </head>

    <body>
        <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">        
        <h1 class="TxTLevel1">Level 2</h1>


            <div class="Menu" onload="setInterval()">
                <button class="MainMenu" onclick="location.href='../Hole Game/Flashlight-Shizzle.html'">Main Menu</button>
                <button id="pauze" class="Pauze" onclick="pause()">Pauze</button>
                <div class="TijdDing"id="tijd"><span id="countdowntimer"><?php echo $leveltime; ?></span></div>
            </div>


                <div class="Next" id="nextlevel">
                        <button class="NextLevel" onclick="index.php?action=next"><b class="NextTekst">Next Level</b></button>
                </div>
                                          

                <div class="Next" id="resume">
                    <button class="NextLevel" onclick="resume()"><b class="NextTekst">Resume</b></button>
                </div>

                
            <div class="Field">
                <div id="flash" class= "Flash">
                    <div class="Flash4"></div>
                    <div class="Flash5"></div>
                    <div class="Flash2">
                    <div class="Flash3"></div>
                    </div>
                </div>
                <div 
                    id="finish" class="Finish" onclick="next()">
                </div>
            </div>
                



    </body>

</html>