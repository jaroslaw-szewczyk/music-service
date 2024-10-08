import { select, classNames, settings } from './settings.js';
import Song from './components/Song.js';
import Player from './components/Player.js';
import RandomSong from './components/RandomSong.js';
import Search from './components/Search.js';
import SideStyle from './components/SideStyle.js';

const app = {

  initPages(){
    const thisApp = this;
    this.pages = document.querySelector(select.containerOf.pages).children;
    this.navLinks = document.querySelectorAll(select.nav.links);

    
    const idFromHash = window.location.hash.replace('#/', '');
    
    let pageMatchingHash = this.pages[0].id;
        
    for(const page of this.pages){
      if(page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    this.activatePage(pageMatchingHash);

    for(const link of this.navLinks){
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();
               
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
                
        /* run.thisApp.activePage with that id */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#/' + id;

      });
    }
  },

  activatePage: function(pageId){

    /* add class "active" to maching pages, remove from non-matching */
    for(const page of this.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
        
    /* add class "active" to maching links, remove from non-matching */
    for(const link of this.navLinks) {
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  //Creation of a Song class instance from data fetched from the server
  initSong: function(){
    const homeSection = document.querySelector(select.homeSection.home);

    for(const song of this.data){
      new Song(song, homeSection);
    }
  },

  //fetch data from the server
  initData: function(){
    const thisApp = this;

    //Creating an empty data object
    thisApp.data = {};
    
    //Assigning url to a variable
    const url = settings.db.url + '/' + settings.db.songs;
    
    //data request
    return fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data = parsedResponse;
        
        //Assigning the size of an array to a variable
        thisApp.numberOfSongs = parsedResponse.length;
       
        //Calling the initSong() function to start the audio player correctly
        thisApp.initSong();

        //Calling the initSong() function to start the audio player correctly
        thisApp.initRandom();
        thisApp.initSearch();
      });
  },

  initRandom: function(){
    const discoverSection = document.querySelector(select.discoverSection.discover);

    new RandomSong(this.numberOfSongs, this.data, discoverSection);
  },

  initSearch(){
    const searchSection = document.querySelector(select.searchSection.search);

    new Search(this.data, searchSection);
  },

  initSideStyle() {
    const element = document.querySelectorAll('.uppercase-text');
    new SideStyle(element);
  },

  init: function(){

    this.initPages();
    this.initData().then(() => {
      new Player(select.audioPlayer.greenAudioElement);
    });
    this.initSideStyle();
  }
};

app.init();