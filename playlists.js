const playlistMap = new Map();

var playlistArray = [];
var favorites = new Object();

var playlistSourceButtons = [];

function registerPlaylist(playlist)
{
    // Add playlist to the songsource and playlistMap

    songSources.set(playlist.name, playlist.songs);

    playlistMap.set(playlist.name, playlist);

    // Create the songsource button

    playlist.songSourceButton = createSongSourceButton(playlist.name, playlist.name, playlist.icon);
    playlistSourceButtons.push(playlist.songSourceButton);
    
}

function isValidPlaylistName(name)
{
    return true;
}

function playlistExists(name)
{
    return playlistMap.has(name);
}

function getPlaylist(name)
{
    return playlistMap.get(name);
}

function createPlaylist(name)
{
    let playlist = new Object();
    playlist.name = name;
    playlist.songIDs = []; 
    playlist.icon = "playlist_play";

    registerPlaylist(playlist);

    savePlaylists();
}

function deletePlaylist(name)
{
    if (playlistMap.has(name))
    {
        removeFromArray(playlistArray, playlistMap.get(name));

        refreshPlaylists();

        savePlaylists();
    }

    else
    {
        console.error("Failed to delete playlist: " + name);
    }
   
}

function removeFromArray(array, item)
{
    let index = array.indexOf(item);

    if (index > -1) 
    {
        array.splice(index, 1);
    }
}

// Toggles whether the listed song is a part of the user's favorites
function toggleFavorite(song)
{
    if (isFavorited(song))
    {
        console.log("Unfavorited song: " + song.name);
        removeSongFromPlaylist(song.name, favorites);
    }

    else
    {
        console.log("Favorited song: " + song.name);
        addSongToPlaylist(song.name, favorites);
    }

    favoritesUpdated(song);
}

function favoritesUpdated(song)
{
    // Update the main favorite button

    updateSongCard(song);

    if (isFavorited(currentSong)) 
    {
        favoriteButton.classList.add("favorited");
        favoriteButton.value = "favorite";
    }

    else 
    {
        favoriteButton.classList.remove("favorited");
        favoriteButton.value = "favorite_border";
    }
}

function updateSongCard(song)
{
    let songCard = song.songCard;

    let songCardFavoriteButton = songCard.getElementsByClassName("card-favorite-button")[0];

    if (isFavorited(song))
    {
        songCardFavoriteButton.classList.add("favorited");
    }

    else
    {
        songCardFavoriteButton.classList.remove("favorited");
    }
}

function isFavorited(song)
{
    return favorites.songs.includes(song);
}

function addSongToPlaylist(name, playlist)
{
    let song = songMap.get(name);

    playlist.songIDs.push(song.num);
    playlist.songs.push(song);

    refreshPlaylistButton(playlist);

    savePlaylists();
}

function removeSongFromPlaylist(name, playlist)
{
    let song = songMap.get(name);

    removeFromArray(playlist.songIDs, song.num);
    removeFromArray(playlist.songs, song);

    refreshPlaylistButton(playlist);
    
    savePlaylists();
}

// Updates the playlist source button with accurate info
function refreshPlaylistButton(playlist)
{
    let option = playlist.songSourceButton;

    option.id = "source-option-" + playlist.name;

    option.getElementsByClassName("source-option-button")[0].setAttribute("data-name", playlist.name);

    option.getElementsByClassName("source-icon")[0].innerHTML = playlist.icon;
    option.getElementsByClassName("source-button-text")[0].innerHTML = playlist.name;

    option.getElementsByClassName("source-button-length")[0].innerHTML = playlist.songs.length;
}

// Removes playlist variables we dont want to store on webstorage
// SHOULD BE RENAMED TO SOMETHING BETTER
function replacer(key,value)
{
    if (key == "songs")
    {
        return undefined;
    }

    else if (key == "songSourceButton")
    {
        return undefined;
    }

    else if (key == "name")
    {
        if (value == "Favorites")
        {
            return undefined;
        }

        else
        {
            return value;
        }
    }
    
    else 
    {
        return value;
    }
}

// Saves all of the playlists (inlcuding the user's favorites) to the user's webstorage. 
function savePlaylists()
{
    try {
        window.localStorage.setItem("playlists", JSON.stringify(playlistArray, replacer));
        window.localStorage.setItem("favorites", JSON.stringify(favorites, replacer));
    } catch (err) {
        console.error(err);
    }
}

// Completely wipes the playlist source buttons and removes all of the 
function refreshPlaylists()
{
    // Remove playlist source buttons (we need to replace them)

    if (playlistSourceButtons != null)
    {
        for (let i = 0; i < playlistSourceButtons.length; i++)
        {
            // Remove the old playlist songsource reference

            songSources.delete(playlistSourceButtons[i].getAttribute("data-name"));

            // Remove it from the menu

            playlistSourceButtons[i].remove();
        }

        playlistSourceButtons = [];
    }

    // Process the favorites

    if (favorites != null)
    {
        favorites.name = "Favorites";
        favorites.songs = getSongArray(favorites.songIDs);
    }

    else
    {
        favorites = new Object();
        favorites.name = "Favorites";
        favorites.songs = [];
        favorites.songIDs = [];
        favorites.icon = "favorite";
    }

    registerPlaylist(favorites);

    // Update the song card favorites buttons

    for (let i = 0; i < songArray.length; i++)
    {
        updateSongCard(songArray[i]);
    }

    // Process the playlists

    if (playlistArray != null)
    {
        for (let i = 0; i < playlistArray.length; i++) 
        {
            let playlist = playlistArray[i];

            playlist.songs = getSongArray(playlist.songIDs);

            registerPlaylist(playlist);
        }
    }

    else
    {
        playlistArray = [];
    }

}

// Loads all of the playlists (including the favorites) from the user's webstorage
// Warning: this method will overwrite unsaved playlist changes
function loadPlaylists()
{

    try {

        // Load favorites and playlists from webstorage

        favorites = JSON.parse(window.localStorage.getItem("favorites"));

        playlistArray = JSON.parse(window.localStorage.getItem("playlists"));

        if (favorites != null)
        {
            console.log("favorites: " + favorites);
        }

        if (playlistArray != null)
        {
            console.log("playlists: " + playlistArray);
        }
        
        refreshPlaylists()
        
    } catch (err) {
        console.error(err);
    }
    

    
}