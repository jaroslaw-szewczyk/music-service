export const select = {
  templateOf: {
    templateHomeSongs: '#template-home-songs',
    templateRandomSongs: '#template-random-songs',
  },

  containerOf: {
    pages: '#pages',
    homeSongs: '#home div ul',
    randomSongContainer: '#random-song-container',
  },

  audioPlayer: {
    greenAudioElement: '.gap-example',
    audioPlayerList: '#home-list',
    randomSongContainer: '#random-song-container',
  },

  nav: {
    links: '.nav-wrapper a',
  },
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
};