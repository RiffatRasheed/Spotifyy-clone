// console.log("welcome to spotify clone");

// // inishilise a veriable 
// let songIndex = 0;
// let audioElement=new Audio('songs/1.mp3');
// let masterPlay=document.getElementById("masterPlay");
// let progressbar=document.getElementById("progressbar");
// let gif=document.getElementById('gif')
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs=[
//     {songname: "song" ,filepath:"songs/1.mp3", coverpath:"./1.jpg" },
//     {songname: "song1" ,filepath:"songs/2.mp3", coverPath:"./2.jpg" },
//     {songname: "song2" ,filepath:".songs/3.mp3" , coverPath:"./3.jpg"},
//     // {songname: "song3" ,filepath:".songs/1.mp3", coverPath:"4.jpg"},
//     // {songname: "song4" ,filepath:"", coverPath:"5.jpg"},
//     // {songname: "song" ,filepath:"", coverPath:"6.jpg"},
//     // {songname: "song" ,filepath:"", coverPath:"7.jpg"}
// ]

 
// songItems.forEach((Element, i)=>{ 
//     Element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     Element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// });
// //handle play pause click
// masterPlay.addEventListener('click',()=> {
//     if(audioElement.paused || audioElement.currenttime===0){
//     audioElement.masterPlay();
// masterPlay.classList.remove('fa-play');
// masterPlay.classList.add('fa-paused');
// gif.style.opacity=1;
// }else {
//     audioElement.pause();
//     masterPlay.classList.remove('fa-paused');
// masterPlay.classList.add('fa-play');
// gif.style.opacity = 0;
// }
// });

// //listen to events

// audioElement.addEventListener('timeupdate', ()=>{ 
//    console.log('timeupdate');
// })


console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname: "song" ,filepath:"./song.mp3", coverpath:"./1.jpg" },
    {songname: "song1" ,filepath:"songs/2.mp3", coverPath:"./2.jpg" },
    {songname: "song2" ,filepath:".songs/3.mp3" , coverPath:"./3.jpg"},
    {songname: "song4" ,filepath:".songs/2.mp3", coverPath:"./4.jpg"},
    {songname: "song5" ,filepath:".songs/3.mp3", coverPath:"./5.jpg"},
    {songname: "song6" ,filepath:".songs/1.mp3", coverPath:"./6.jpg"},
    



]
    songItems.forEach((element, i)=>{ 
        element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    })
     
    
    // Handle play/pause click
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{ 
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myProgressBar.value = progress;
    })
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })
    
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
    
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
