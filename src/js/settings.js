export const select = {
  templateOf: {
    templateSong: '#template-song',
  },

  containerOf: {
    pages: '#pages',
    homeSongs: '#home div ul',
  },

  audioPlayer: {
    greenAudioElement: '.gap-example',
    audioPlayerList: '.home-list',
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
  songView: Handlebars.compile(document.querySelector(select.templateOf.templateSong).innerHTML),
};