function submitDetails(event) {
    event.preventDefault();
    var no_of_floors = document.getElementById("floors");
    var no_of_lifts = document.getElementById("lifts");

    sessionStorage.setItem("floor",no_of_floors.value);
    sessionStorage.setItem("lift",no_of_lifts.value);

    if(no_of_floors.value > no_of_lifts.value){
        document.getElementById("errorMessage").style.visibility  = "hidden";
    }

    if(no_of_floors.value < no_of_lifts.value){
        document.getElementById("errorMessage").style.visibility  = "visible";
    }
    
  
   
}

