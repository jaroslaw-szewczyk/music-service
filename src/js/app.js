import { select, classNames } from './settings.js';

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

  init: function(){
    this.initPages();
  }
};

app.init();