myStorage = window.localStorage;
function stop_the_game() {

    document.getElementById("game_is_end").style.display = "block"
    end_flag=true;
    update_final_score(show_score);
    count_time++;
    score = 0;
    document.getElementById("game_is_end").innerText = "Times out! Awesome! You have caught " + show_score + " eggs.";
    //alert("time out");
    storage_score = localStorage.getItem('final_score');
    document.getElementById("best_score").innerText=storage_score;
}
function update_final_score(show_score){
    if(show_score>=storage_score){
        final_score=show_score;
    }
    if(final_score === undefined){
        final_score=storage_score;
    }
    localStorage.setItem('final_score',final_score);
    document.getElementById('best_score').innerText = final_score;
}
document.getElementById('timer').innerHTML = 0 + ":" + 10;
startTimer();
var timerClock;
function startTimer() {
    if(localStorage.getItem("final_score")!=='undefined'){
        storage_score = localStorage.getItem('final_score');
    } else{storage_score=0;}
    document.getElementById("best_score").innerText=storage_score;
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s === 59){m=m-1}
    if(m<0){
        stop_the_game();
        return
    }
    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    timerClock=setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec;} // add zero in front of numbers < 10
    if (sec < 0) {sec = "59";}
    return sec;
}
function restart_game(){
    document.getElementById('restart').disabled=true;
    clearTimeout(timerClock);
    end_flag=true;
    setTimeout(doRestart,500);
}
function doRestart(){
    count_bullseye = 0;
    document.getElementById("lost_score").innerText= count_bullseye+"  ";
    document.getElementById("game_is_end").style.display = "none"
    document.getElementById('restart').disabled=false;
    speed=3;
    score=0;
    y1 = 140;
    y2 = 370;
    y3 = 250;
    update_score();
    document.getElementById('timer').innerHTML = 0+ ":" + 10;
    end_flag=false;
    startTimer();
    dropEgg();
}