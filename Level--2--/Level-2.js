onmousemove = function (e) 
{
    var x = e.pageX,
    y = e.pageY;
    moveThis.style.top = (y - 100);
    moveThis.style.left =(x - 100);
    };

var moveThis = document.getElementById('flash');
//var moveOut = document.getElementById('field');

//console.log(moveThis)

//if ((moveThis.offsetTop<0) || (moveThis.offsetLeft<0))
//{
//    moveThis = false;
//}

//if mousemove = uit de zwarte box dan stopt hij met bewegen

//als x of y lager is dan 0 dan stop met bewegen