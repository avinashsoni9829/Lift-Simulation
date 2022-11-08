document.addEventListener("DOMContentLoaded",function(){
         
    let floor = sessionStorage.getItem("floor");
      for (let index = 0; index < parseInt(floor); index++) {
        const heading  = document.createElement("p");
        const node = document.createTextNode("floor " + (index + 1).toString());
        heading.appendChild(node);

        const division = document.getElementById("div1");
        division.append(heading);
            
         }
         
   
     
})
 