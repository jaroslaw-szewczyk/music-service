import { select, templates } from '../settings.js';

class Song{
  constructor(songData){
    this.songData = songData;
    
    this.renderSong();
  }

  renderSong(){
    const generatedHTML = templates.songView(this.songData);

    const songList = document.querySelector(select.audioPlayer.audioPlayerList);

    songList.insertAdjacentHTML('beforeend', generatedHTML);
  }
}

export default Song;