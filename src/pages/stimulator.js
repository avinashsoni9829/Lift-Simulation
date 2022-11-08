floor;
lift;
function logData(event){
    event.preventDefault();
    floor = parseInt(sessionStorage.getItem("floor"))
    lift = parseInt(sessionStorage.getItem("lift"))
 }