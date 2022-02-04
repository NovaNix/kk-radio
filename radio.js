"use strict";

/*

favorite
loop
playlist_add: add song to playlist
grid_view: show all songs
auto_awesome
library_music: change the source of music

*/

// An array containing all of the songs the radio should play. By default it is set to all songs
var songSource = songArray;

var songLoaded = false;

var currentSong;

var playing = false;
var kkMode = false;

const content = document.getElementById("content");

const title = document.getElementById("title");
const cover = document.getElementById("cover");
const player = document.getElementById("player");

const playButton = document.getElementById("play");
const volumeSlider = document.getElementById("volume");

const kkToggleButton = document.getElementById("kk-toggle");

// Sort the song array

songArray.sort(function(a, b){return a.num - b.num});

// Process all of the songs into a map that stores the songs by name

const songMap = new Map();

for (let i = 0; i < songArray.length; i++)
{
    var song = songArray[i];
    songMap.set(song.name, song);
}

console.log("Loaded all songs");

// Populate the song list container

const songCardList = document.getElementById("song-list"); 
const songCardTemplate = document.getElementById("song-template");

for (let i = 0; i < songArray.length; i++)
{
    var song = songArray[i];
    var songCard = songCardTemplate.content.firstElementChild.cloneNode(true);

    songCard.id = "song-card-" + song.num;

    // Update Card Info

    songCard.getElementsByClassName("song-title")[0].innerHTML = "<b>" + song.name + "</b>";
    songCard.getElementsByClassName("song-cover")[0].src = song.imagesrc;

    songCard.setAttribute("data-name", song.name);
    songCard.getElementsByClassName("card-play-button")[0].setAttribute("data-name", song.name);

    // Add card to the card list

    songCardList.appendChild(songCard);
}

console.log("Populated song list container!");

function getRandomSong()
{
    return songSource[Math.floor(Math.random()*songArray.length)];
}

function loadRandomSong()
{
    playSong(getRandomSong().name);
}

function playSong(name)
{
    var song = songMap.get(name);

    if (song != null)
    {
        currentSong = song;

        title.innerHTML = currentSong.name;
        cover.src = currentSong.imagesrc;

        if (kkMode) 
        {
            player.src = currentSong.live;
        }

        else {
            player.src = currentSong.aircheck;
        }

        songLoaded = true;

        if (playing) 
        {
            player.play();
        }
    }

    else
    {
        console.error("Failed to find song: " + name);
    }
}

function togglePlay()
{
    if (songLoaded != true)
    {
        loadRandomSong();
    }

    playing = !playing;

    if (playing)
    {
        player.play();
        playButton.value = "pause";
    }

    else
    {
        player.pause();
        playButton.value = "play_arrow";
    }
}

function skipSong()
{
    //window.alert("skipping");
    loadRandomSong();
}

function updateVolume(slider)
{
    player.volume = (slider.value / 100);
}

function toggleKKMode()
{
    kkMode = !kkMode;

    var currentPlaybackTime = player.currentTime;

    if (kkMode)
    {
        player.src = currentSong.live;
        kkToggleButton.style.backgroundColor = "var(--kk-blue)";
    }

    else
    {
        player.src = currentSong.aircheck;
        kkToggleButton.style.backgroundColor = "var(--kk-red)";
    }

    player.currentTime = currentPlaybackTime;

    if (playing)
    {
        player.play();
    }

}

player.addEventListener('ended', (event) => {
    loadRandomSong();
});

updateVolume(volumeSlider);

loadRandomSong();