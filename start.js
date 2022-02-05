// Responsible for handling all of the code run at the start
// I added this so all of the other scripts can be loaded before performing startup tasks

loadPlaylists();
updateVolume(volumeSlider);
loadRandomSong();