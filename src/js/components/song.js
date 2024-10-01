import { select, templates } from '../settings.js';

class Song{
  constructor(songData, homeSection){
    this.songData = songData;
    this.homeSection = homeSection;
    
    this.renderSong();
  }

  renderSong(){
    const generatedHTML = templates.songView(this.songData);

    const songList = this.homeSection.querySelector(select.homeSection.audioPlayerList);
    
    songList.insertAdjacentHTML('beforeend', generatedHTML);
  }
}

export default Song;