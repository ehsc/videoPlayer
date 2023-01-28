const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $progress = document.querySelector('#progress')

$play.addEventListener("click",handlePlay);
$pause.addEventListener("click",handlePause);
$forward.addEventListener("click",handleForward);
$backward.addEventListener("click",handleBackward);
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);


function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;    
}

function handleForward() {
    $video.currentTime += 10;    
}

function handleBackward() {
    $video.currentTime -= 10;
}

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = video.currentTime
}

$progress.addEventListener('input',handleInput);

function handleInput(){
    $video.currentTime = $progress.value
}