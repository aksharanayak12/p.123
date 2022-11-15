noseX=0;
noseY=0;

function preload(){
lips1=loadImage("lips1.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenetisinitialized")

} 
function draw(){
image(video,0,0,300,300);
image(lips1,noseX-25,noseY+10,40,40)
}
function take_snapshot(){
    save("myfilterimage.png")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x)
        console.log("nose y= "+results[0].pose.nose.y)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
