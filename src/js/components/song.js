import { select, templates } from '../settings.js';

class Song{
  constructor(songId, songData){
    this.songData = songData;
    this.id = songId;

    this.renderSong();
    // this.initAudio();
  }

  renderSong(){
    const generatedHTML = templates.songView(this.songData);

    const songContainer = document.querySelector(select.containerOf.homeSongs);

    songContainer.insertAdjacentHTML('beforeend', generatedHTML);
  }
}

export default Song;