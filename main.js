function preload() {}

function setup() {
    canvas = createCanvas(350, 300);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoded() {
    console.log('PoseNet Is Initializd')
}

function draw() {
    image(video, 0, 0, 350, 300);
}

function take_snapshot() {
    save('myFilterImage.png');
}