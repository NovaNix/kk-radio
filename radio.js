"use strict";

/*

favorite
loop
playlist_add: add song to playlist
playlist_play: icon for playlist source
auto_awesome
settings

shuffle_on

*/

// An array containing all of the songs the radio should play. By default it is set to all songs
var songSource = songArray;
const songSources = new Map();

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
    let song = songArray[i];
    songMap.set(song.name, song);
}

console.log("Loaded all songs");

// Populate the song list container

const songCardList = document.getElementById("song-list"); 
const songCardTemplate = document.getElementById("song-template");

for (let i = 0; i < songArray.length; i++)
{
    let song = songArray[i];
    let songCard = songCardTemplate.content.firstElementChild.cloneNode(true);

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

// Set up song sources

const moods = {
    good: [],
    grumpy: [],
    lazy: [],
    sad: [],
    hardToSay: []
};

// Populate mood arrays
for (let i = 0; i < songArray.length; i++)
{
    switch (songArray[i].mood)
    {
        case "I feel good!":
            moods.good.push(songArray[i]);
            break;
        case "A little grumpy...":
            moods.grumpy.push(songArray[i]);
            break;
        case "Laid-back":
            moods.lazy.push(songArray[i]);
            break;
        case "A little blue...":
            moods.sad.push(songArray[i]);
            break;
        case "It's hard to say":
            moods.hardToSay.push(songArray[i]);
            break;
    }
}

// TODO Load Favorites

songSources.set("all", songArray);

songSources.set("good", moods.good);
songSources.set("grumpy", moods.grumpy);
songSources.set("lazy", moods.lazy);
songSources.set("sad", moods.sad);
songSources.set("hardToSay", moods.hardToSay);

console.log("Added songs to sources:");
console.log("Good: " + moods.good.length);
console.log("Grumpy: " + moods.grumpy.length);
console.log("Lazy: " + moods.lazy.length);
console.log("Sad: " + moods.sad.length);
console.log("Hard to say: " + moods.hardToSay.length);

// Populate song source dropdown
// This is done dynamicly so if I decide to add playlists itll be easy to do so

const sourcePicker = document.getElementById("source-picker"); 
const sourceOptionTemplate = document.getElementById("source-option-template");

function createSongSourceButton(sourceName, sourceTitle, sourceIcon)
{
    let option = sourceOptionTemplate.content.firstElementChild.cloneNode(true);

    option.id = "source-option-" + sourceName;

    option.getElementsByClassName("source-option-button")[0].setAttribute("data-name", sourceName);

    option.getElementsByClassName("source-icon")[0].innerHTML = sourceIcon;
    option.getElementsByClassName("source-button-text")[0].innerHTML = sourceTitle;

    sourcePicker.appendChild(option);
}

createSongSourceButton("all", "All Songs", "radio");

createSongSourceButton("good", "I feel good!", "mood");
createSongSourceButton("grumpy", "A little grumpy...", "thunderstorm");
createSongSourceButton("lazy", "Laid-back", "king_bed");
createSongSourceButton("sad", "A little blue...", "sentiment_dissatisfied");
createSongSourceButton("hardToSay", "It's hard to say", "sentiment_neutral");

function setSongSource(name)
{
    let source = songSources.get(name);

    if (source != null)
    {
        songSource = source;

        // Update the option buttons so the right one is highlighted 

        let optionButton = document.getElementById("source-option-" + name);

        let optionButtons = document.getElementsByClassName("source-option");

        if (optionButton != null)
        {
            for (let i = 0; i < optionButtons.length; i++)
            {
                optionButtons[i].classList.remove("current-source");
            }

            optionButton.classList.add("current-source");
        }

        else
        {
            console.warn("Successfully set song source to '" + name + "' but there was no corresponding option button!");
        }

        // Update the current song so it is part of the new source list

        loadRandomSong();
    }

    else
    {
        console.error("Failed to find song source: " + name);
    }
}

// Returns a random song from the current song source
function getRandomSong()
{
    return songSource[Math.floor(Math.random() * songSource.length)];
}

// Picks a random song from the song source and plays it if the player is already playing
function loadRandomSong()
{
    playSong(getRandomSong().name);
}

// Loads the song (sets the title, cover, and audio source). Does not play the song
function loadSong(name)
{
    let song = songMap.get(name);

    if (song != null)
    {
        currentSong = song;

        title.innerHTML = currentSong.name;
        cover.src = currentSong.imagesrc;

        if (kkMode) 
        {
            player.src = currentSong.live;
        }

        else 
        {
            player.src = currentSong.aircheck;
        }

        songLoaded = true;
    }

    else
    {
        console.error("Failed to find song: " + name);
    }
}

function playSong(name)
{
    loadSong(name);

    if (playing) 
    {
        player.play();
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

    let currentPlaybackTime = player.currentTime;

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

setSongSource("all");

updateVolume(volumeSlider);

loadRandomSong();