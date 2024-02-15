
document.getElementById("submit").onclick= function(){
    let temp;
    if(document.getElementById("ctemp").checked ){
        temp = document.getElementById("bx").value;
        temp = Number(temp);
        temp = tocel(temp)
        document.getElementById("rslt").innerHTML ="The temperature is "+ temp + " °C";

    }
    else if(document.getElementById("ftemp").checked){
        temp = document.getElementById("bx").value;
        temp = Number(temp);
        temp = tofer(temp)
        document.getElementById("rslt").innerHTML = "The temperature is "+ temp + " F";

    }
    else{
        document.getElementById("rslt").innerHTML= "Please select one of the two parameters. ";
    }
}



function tocel(temp){
    return (temp - 32) * 5/9;
}
function tofer(temp){
    return temp * 9 / 5 + 32;
}







document.getElementById("submit1").onclick= function(){
    let tem;
    if(document.getElementById("ctemp1").checked){
        tem = document.getElementById("bx1").value;
        tem = Number(tem);
        tem = tocel1(tem)
        document.getElementById("rslt1").innerHTML = "The temperature is "+ tem + " °C";

    }
    else if(document.getElementById("ftemp1").checked){
        tem = document.getElementById("bx1").value;
        tem = Number(tem);
        tem = tokel(tem)
        document.getElementById("rslt1").innerHTML ="The temperature is "+  tem + " K";

    }
    else{
        document.getElementById("rslt1").innerHTML= "Please select one of the two parameters. ";
    }
}







function tocel1(tem){
    return tem - 273.15;
}
function tokel(tem){
    return tem + 273.15;
}