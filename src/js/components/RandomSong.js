import { select, templates } from '../settings.js';


class RandomSong{    
  constructor(numberOfSongs, songsList, discoverSection){
    this.numberOfSongs = numberOfSongs;
    this.songsList = songsList;
    this.discoverSection = discoverSection;
    
    this.randomSong();
    this.renderSong();
  }

  randomSong(){
    const randomSongIndex = Math.floor(Math.random() * this.numberOfSongs);

    this.randomSongData = this.songsList[randomSongIndex];
  }

  renderSong(){

    const generatedHTML = templates.randomSongView(this.randomSongData);

    const discoverSong = this.discoverSection.querySelector(select.containerOf.randomSongContainer);
   
    discoverSong.innerHTML = generatedHTML;
  }
}

export default RandomSong;