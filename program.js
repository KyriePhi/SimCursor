
  // Mehmet Berat ŞENEL
 //  www.mehmetberat.com

// Creating canvas at all window.
let canvas=document.getElementById("canv");
canvas.style.height = window.innerHeight+"px";
canvas.style.width = window.innerWidth+"px";
// Creating star at mouse coordinate.
const Stars = [];
window.addEventListener("mousemove",function SimDraw(event){
  Stars.push([event.clientY,event.clientX]);
})
// The function is controlled all star per time.
function StarControl(){
  canvas.innerHTML="";
  for(i=0; i<Stars.length ; i++){
    Stars[i][0]=Stars[i][0]+5;
    if( Stars[i][0]>canvas.offsetHeight-15){
      Stars.splice(i, 1)
    }
  }
  for(i=0; i<Stars.length ; i++){
    canvas.innerHTML += "<div class='star' style='margin-top:"+Stars[i][0]+"px;margin-left:"+Stars[i][1]+"px'></div>";
  }
}
setInterval(StarControl,10);