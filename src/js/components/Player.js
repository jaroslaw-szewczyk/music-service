import { select } from '../settings.js';

class Player {
  constructor(element) {
    this.element = element;

    this.initPlayer();
  }

  initPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: select.audioPlayer.greenAudioElement,
      stopOthersOnPlay: true
    });
  }
}

export default Player;