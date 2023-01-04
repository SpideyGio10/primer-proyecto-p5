function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(200,200);
    video.hide();
   
    background("lawngreen");
}

function draw(){
    image(video,100,100,200,200);
}

function take_snapshot(){
    save('fotografía.png')
}