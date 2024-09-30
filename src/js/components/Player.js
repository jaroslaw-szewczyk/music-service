class Player {
  constructor(selector) {
    this.selector = selector;
    this.initPlayer();
  }

  initPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: this.selector, // inits Green Audio Player on each audio container that matches the selector
      stopOthersOnPlay: true
    });
  }
}

export default Player;