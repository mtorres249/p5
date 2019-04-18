 

function setup() {
  // put setup code here
       createCanvas(1000, 1000,);
       background("#67e3f7");
}

function draw() {
  // put drawing code here
    //change color of ellipse and text
    if (keyIsPressed === true) {
        fill("#cc20f7");
    }else{
        fill("#f78f20");
    }

           strokeWeight(3);
           ellipse(random(width), random(height), 15, 15);
    
    fill("#e9f720");
    stroke(0)
    strokeWeight(8);
    textSize(65);
    textFont("hobo std");
    text("Press Key To Change Color", 110, 350);
    
    
    fill("#e9f720");
    stroke(0)
    strokeWeight(8);
    textSize(75);
    textFont("hobo std");
    text("Click Mouse To Reset", 145, 650);

}
//Clear Canvas if mouse pressed



function mousePressed(){
 background("#67e3f7");   
}
