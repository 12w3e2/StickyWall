const canvas=document.getElementById("canvas"); //"canvas" is object.
const ctx=canvas.getContext("2d");
console.dir(canvas)
const canvasWidth=canvas.width=800;
const canvasHeight=canvas.height=600;
console.log(Math.random()*255);

//!Creating rectangle inside the canvas
// ctx.fillStyle="orange";
// ctx.fillRect(0,0,20,20);

function animate(){
    let random=Math.random()*25;
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.fillRect(Math.random()*800*0.95,Math.random()*600*0.95,5+random,5+random);
    requestAnimationFrame(()=>{
        setTimeout(animate,1) //1000ms is 1seconds.
    }); //Creates an infinite loop


}
animate();
