console.log("Welcome to Spotify")

// Initialize Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById("masterSongName");


let songs=[
    {songName:"Unforgettable - French Montana ft Swan Leee", filePath:"songs/1.mp3", coverPath: "logo1.png"},
    {songName:"Con Calma - Daddy Yankee ", filePath:"songs/2.mp3", coverPath: "logo1.png"},
    {songName:"Pepas - Farruko", filePath:"songs/3.mp3", coverPath: "logo1.png"},
    {songName:"I like It - Cardi B", filePath:"songs/4.mp3", coverPath: "logo1.png"},
    {songName:"Look at Me - TokyoSleep", filePath:"songs/5.mp3", coverPath: "logo1.png"},


]

//Populate song name and cover
songItems.forEach((element, i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
})


// Handle play/pause
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

        
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})


progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if (audioElement.paused || audioElement.currentTime <=0) {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
            
        } else {
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            // audioElement.src = `songs/${songIndex+1}.mp3`;
            // audioElement.currentTime = 0;
            audioElement.pause();
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;
            
        }
       

    })

})

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterSongName.innerText = songs[songIndex].songName;
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;

//     })

// })


document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex = 0;
        
    } else {
        songIndex-=1;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        // gif.style.opacity = 1;

})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=5) {
        songIndex = 0;
        
    } else {
        songIndex+=1;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        // gif.style.opacity = 1;

})


