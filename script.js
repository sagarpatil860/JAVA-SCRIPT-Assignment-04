'use strict';
let msg="hello";
document.getElementById("passmsg").addEventListener("click", displaymsg);
function displaymsg()
{
    
    msg=document.getElementById("fname").value;    
    document.getElementById("messagecontent").innerHTML=msg;
}