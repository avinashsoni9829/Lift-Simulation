function submitDetails(event) {
    console.log("hek");
    event.preventDefault();
    var no_of_floors = document.getElementById("floors");
    var no_of_lifts = document.getElementById("lifts");
    console.log(no_of_floors.value);
    console.log(no_of_lifts.value);
    window.location.href="http://127.0.0.1:5500/src/pages/stimulator.html";
}

function setUpStimulator(floor , lifts){
    
    console.log(floor);
    console.log(lifts);
}