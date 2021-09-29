canvas.addEventListener("mousemove", moveBasket);
var basketImg=new Image();
basketImg.src='basket.png';
var bullseyeImg=new Image();
bullseyeImg.src='bullseye.png';


function moveBasket(e){
    console.log("move")
    basket_x = e.layerX-basket_width/2;
}

var dropEgg = function dropEgg(){
    if(end_flag) {
        return
    }
    c.clearRect(0,0,canvas.width,canvas.height);
    y1=y1+speed;
    if(y1>=canvas.height){
        y1=200;
    }
    c.beginPath();
    c.fillStyle="orange";
    c.arc(x1, y1, 20, 0, 2 * Math.PI);//new
    c.fill()
    if(catchEgg(x1,y1,1) === 1){
        drawFlag1 =1;
    }
    if(drawFlag1 === 1 ){
        c.drawImage(bullseyeImg,95,canvas.height-40,80,40);
    }
    if(drawFlag1 === 1&&timeFlag1){
        setTimeout(function (){drawFlag1=0},300);
        timeFlag1=false;
    }
    y2=y2+speed;
    if (y2 >= canvas.height) {
        y2 = 300;
    }
    c.beginPath();
    c.fillStyle="orange";
    c.arc(x2, y2, 20, 0, 2 * Math.PI);//new
    c.fill()
    if(catchEgg(x2,y2,2) === 1){
        drawFlag2 =1;
    }
    if(drawFlag2 === 1 ){
        c.drawImage(bullseyeImg,342,canvas.height-40,80,40);
    }
    if(drawFlag2 === 1&&timeFlag2){
        setTimeout(function (){drawFlag2=0},300);
        timeFlag2=false;
    }
    y3=y3+speed;
    if(y3>=canvas.height){
        y3=230;
    }
    c.beginPath();
    c.fillStyle="orange";
    c.arc(x3, y3, 20, 0, 2 * Math.PI);//new
    c.fill()
    if(catchEgg(x3,y3,3) === 1){
        drawFlag3 =1;
    }
    if(drawFlag3 === 1 ){
        c.drawImage(bullseyeImg,613,canvas.height-40,80,40);
    }
    if(drawFlag3 === 1&&timeFlag3){
        setTimeout(function (){drawFlag3=0},300);
        timeFlag3=false;
    }
    c.drawImage(basketImg,basket_x,basket_y,basket_width,basket_height);
    window.requestAnimationFrame(dropEgg);
}
function catchEgg(x,y,egg_index){
    if( x>basket_x && x<basket_x+basket_width
        && y<canvas.height && y>basket_y) {
        if(egg_index === 1) {
            y1=canvas.height + 12;
            update_score();
            update_speed();
        } else if(egg_index === 2) {
            y2=canvas.height + 12;
            update_score();
            update_speed();
        } else if(egg_index === 3) {
            y3 = canvas.height + 12;
            update_score();
            update_speed();
        }
        return 0; // catch the egg successfully
    } else if(y<canvas.height && y>basket_y
        && (x<basket_x || x>basket_width+basket_x )){
        if(egg_index === 1){
            y1=canvas.height+10;
            timeFlag1=true;
        } else if (egg_index === 2){
            y2=canvas.height+10;
            timeFlag2=true;
        } else if (egg_index === 3) {
            y3 = canvas.height + 10;
            timeFlag3 = true;
        }
        //count_bullseye++;
        //document.getElementById("lost_score").innerText= count_bullseye+"  ";
        update_bullseye();
        return 1;//not catch the egg
    }
}
function update_speed() {
    if (score > 3 && score <= max_speed) {
        speed++;
    }
}
window.onload = update_score();
function update_score() {
    show_score = score;
    document.getElementById('score').innerText = score;
    score++;
}
function update_bullseye(){
    count_bullseye++;
    document.getElementById("lost_score").innerText= count_bullseye+"  ";

}
dropEgg();
