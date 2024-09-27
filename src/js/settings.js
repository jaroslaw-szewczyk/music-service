export const select = {
  templateOf: {
    templateSong: '#template-song',
  },

  containerOf: {
    pages: '#pages',
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
  },
};


export const templates = {
  songView: Handlebars.compile(document.querySelector(select.templateOf.templateSong).innerHTML),
};