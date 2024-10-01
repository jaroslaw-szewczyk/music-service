export const select = {
  templateOf: {
    templateHomeSongs: '#template-home-songs',
    templateRandomSongs: '#template-random-songs',
    templateSearch:'#search-song-template'
  },

  containerOf: {
    pages: '#pages',
    homeSongs: '#home div ul',
    randomSongContainer: '#random-song-container',
  },

  audioPlayer: {
    greenAudioElement: '.gap-example',
    randomSongContainer: '#random-song-container',
    searchAudioPlayer: '.search-player',
  },

  nav: {
    links: '.nav-wrapper a',
  },

  homeSection: {
    home: '#home',
    audioPlayerList: '#home-list',
  },

  searchSection: {
    search: '#search',
    searchForm: '#search-form',
    searchInput: '#search-input',
    searchResult: '#serch-result',
  },

  discoverSection: {
    discover: '#discover',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },

  nav: {
    active: 'active-nav',
  },
};

export const settings = {
  db: { 
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};


export const templates = {
  songView: Handlebars.compile(document.querySelector(select.templateOf.templateHomeSongs).innerHTML),
  randomSongView: Handlebars.compile(document.querySelector(select.templateOf.templateRandomSongs).innerHTML),
  searchedSongs: Handlebars.compile(document.querySelector(select.templateOf.templateSearch).innerHTML),
};