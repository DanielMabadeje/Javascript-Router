var element=document.getElementById("side");
function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    element.classList.add("col-md-4");
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("side").style.display= "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    element.classList.remove("col-md-4");
    document.getElementById("side").style.marginLeft= "0";
    document.getElementById("side").style.display= "none";
    // document.getElementsByClassName("closebtn").style.display="none";
    document.body.style.backgroundColor = "white";
  }
  