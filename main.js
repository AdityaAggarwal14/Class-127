song= "";
leftwristx=0;
leftwristy= 0;
rightwristx= 0;
rightwristy= 0;

function preload(){
    song= loadSound("music.mp3");
}

function setUp(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    video.hide();
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx= results[0].pose.leftWrist.x;
        leftwristy= results[0].pose.leftWrist.y;
        rightwristx= results[0].pose.rightWrist.x;
        rightwristy= results[0].pose.rightWrist.y;
        console.log("LeftWristx= "+leftwristx+"RightWristx"+rightwristx);
        console.log("LeftWristy= "+leftwristy+"RightWristy"+rightwristy);
    }
}


function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
