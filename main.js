noseX=0;
noseY=0;
function preload(){
    mustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX-15,noseY-5,30,30);
    
}

function Take_Snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{    
    if (results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
    }
}