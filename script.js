console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "warriyo-Mortals(Laura brehm)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV-Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "RabbaMortals (feat)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },

]
songItems.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
// audioElement.play();
//Handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');


        
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        songIndex = parseInt(e.target.id);
        makeAllPlays();

        // songIndex = parseInt(e.target.id);
        //  if (songIndex == parseInt(e.target.id)) {
        //         e.target.classList.add('fa-play-circle');
        //         e.target.classList.remove('fa-pause-circle');
    
    
        //     }
        //     else {
        //         e.target.classList.remove('fa-play-circle');
        //         e.target.classList.add('fa-pause-circle');
        //     }
        
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.play();
        gif.style.opacity = 1;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})