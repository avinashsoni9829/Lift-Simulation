document.addEventListener("DOMContentLoaded",function(){
         
    let floor = sessionStorage.getItem("floor");
      
      for (let index = 0; index < parseInt(floor); index++) {
        const heading  = document.createElement("p");
        heading.className = "floor"
        const node = document.createTextNode("floor " + (floor - index).toString());
        heading.appendChild(node);
        const div = document.createElement("div");
        div.className ="line";

        const up_button = document.createElement("button");
        up_button.innerHTML="up";
        up_button.className ="btn";
        const down_button = document.createElement("button");
        down_button.innerHTML="down";
        down_button.className ="btn";
        const division = document.getElementById("div1");
        division.append(heading);
        if(index == floor - 1){
          division.append(up_button)
       }
       else
       {
          division.append(up_button);
          division.append(down_button);
       }
        division.append(div);
       
            
     }
      
})


 