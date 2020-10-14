function openNav(){
    var x = document.getElementById("navigation");
    if(x.className === "navigation"){
        x.className = "navigation menujs";
        document.getElementById("menuicon").innerHTML = "&Cross;";
    }else{
        x.className = "navigation";
        document.getElementById("menuicon").innerHTML = "&equiv;";

    }
}