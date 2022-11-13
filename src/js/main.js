function submitDetails(event) {
    event.preventDefault();
    var no_of_floors = document.getElementById("floors");
    var no_of_lifts = document.getElementById("lifts");

    sessionStorage.setItem("floor",no_of_floors.value);
    sessionStorage.setItem("lift",no_of_lifts.value);
    
    console.log(no_of_floors.value);
    console.log(no_of_lifts.value);
    if(parseInt(no_of_floors.value) > parseInt(no_of_lifts.value)){
        document.getElementById("errorMessage").style.visibility  = "hidden";

        window.location.href="http://127.0.0.1:5500/src/pages/stimulator.html";
    }

    if(parseInt(no_of_floors.value) < parseInt(no_of_lifts.value)){
       
        document.getElementById("errorMessage").style.visibility  = "visible";
    }
    
  
   
}

