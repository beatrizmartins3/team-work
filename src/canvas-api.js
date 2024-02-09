function theDraw(){
    function draw() {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          const d = canvas.getContext("2d");
      
          d.beginPath();
          d.arc(75, 75, 50, 0, Math.PI * 2, true); 
          d.moveTo(110, 75);
          d.fillStyle = "yellow";
          d.fill();
          d.arc(75, 75, 35, 0, Math.PI, false); 
          d.moveTo(65, 65);
          d.arc(60, 65, 5, 0, Math.PI * 2, true); 
          d.moveTo(95, 65);
          d.arc(90, 65, 5, 0, Math.PI * 2, true); 
          d.stroke();
        } 
    }
      
    draw();
    
    function draw2(){
        const canvas2 = document.getElementById("frowny");
        if (canvas2.getContext) {
          const d2 = canvas2.getContext("2d");



          d2.beginPath();
          d2.arc(75, 75, 50, 0, Math.PI * 2, true); 
          d2.fillStyle = "red"; 
          d2.fill();


         d2.beginPath();
         d2.arc(60, 60, 5, 0, Math.PI * 2, true);  
         d2.fillStyle = "black"; 
         d2.fill();

         d2.beginPath();
         d2.arc(90, 60, 5, 0, Math.PI * 2, true);  
         d2.fillStyle = "black"; 
         d2.fill();




         d2.beginPath();
         d2.moveTo(60, 80); 
         d2.lineTo(90, 80); 
         d2.lineWidth = 2; 
         d2.strokeStyle = "black"; 
         d2.stroke();

        } 
    }
    draw2();
    canvas.addEventListener("click", function () {
        if (context.fillStyle === "blue") {
          draw();
        } else {
          draw2();
        }
      });
}
theDraw();