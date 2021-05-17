function preload(){
   
}

function setup(){
    canvas = createCanvas(640,480);  
    canvas.position(350,300)

    video = createCapture(VIDEO)
    video.hide();
    filter = ''
}

function draw(){
    image(video,0,0,640,480);
    tint(filter);
}

function take_snapshot(){
    save('image.png');
}

function filter_tint(){
    filter = document.getElementById('glint').value;

    
}