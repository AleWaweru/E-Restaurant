function myFunction() {
    var x = document.getElementById("list2");
    if (x.className === "container-list") {
      x.className += " responsive";
    } else {
      x.className = "container-list";
    }
  }

 
  
  function myLogin(){
    window.location = "login.html";
  }