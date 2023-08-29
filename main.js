thornsong=""
starsong=""
scoreL=0
scoreR=0
rwx=0
rwy=0
lwx=0
lwy=0
function preload(){
thornsong=loadSound("DanceOfThorns.mp3")   
starsong=loadSound("CountingStars.mp3")
}
    function setup(){
     canvas=createCanvas(600, 500)
     canvas.center()
     video=createCapture(VIDEO)
     video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
    }
    function draw(){
   image(video, 0, 0, 600, 500)
   if(scoreL>0.2){
    circle(lwx, lwy, 40)
    starsong.pause()
    thornsong.pause()
    thornsong.play()
   }
   if(scoreR>0.2){
    circle(rwx, rwy, 40)
    thornsong.pause()
    starsong.pause()
    starsong.play()
   }

    }

function gotPoses(results){
if(results.length>0){
rwx=results[0].pose.leftWrist.x  
rwy=results[0].pose.leftWrist.y
lwx=results[0].pose.rightWrist.x  
lwy=results[0].pose.rightWrist.y
scoreL=results[0].pose.keypoints[9].score
scoreR=results[0].pose.keypoints[10].score
}
}

function modelLoaded(){
console.log("good job")    
}
