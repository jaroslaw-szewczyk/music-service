import { select, templates } from '../settings.js';
import Player from './Player.js';

class Search{
  constructor(songsList, searchSection){
    this.songsList = songsList;
    this.searchSection = searchSection;

    this.getElements();
    this.formListener();
  }

  getElements(){
    this.dom = {};

    this.dom.form = this.searchSection.querySelector(select.searchSection.searchForm);
    this.dom.input = this.searchSection.querySelector(select.searchSection.searchInput);
    
  }

  renderSongs() {
    const generatedHTML = templates.searchedSongs(this.data);
  
    const resultContainer = this.searchSection.querySelector(select.searchSection.searchResult);

    resultContainer.innerHTML = generatedHTML;

    new Player(select.audioPlayer.searchAudioPlayer);
  }

  formListener(){
    this.dom.form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const inputValue = this.dom.input.value.trim();

      if(inputValue === ''){
        alert('Empty search field');
      }else {
        this.result(inputValue.toLowerCase());
      }
    });
  }

  result(value){
    const songs = [];

    for(const song of this.songsList){
      let lowerCaseTitle = song.title.toLowerCase();
      let lowetCaseAuthor = song.author.toLowerCase();
      
      if(lowerCaseTitle.includes(value) || lowetCaseAuthor.includes(value)){
        songs.push(song);
      }
    }
    
    this.data = {
      length: songs.length,
      songs: songs,
    };
    this.renderSongs();
  }
}

export default Search;