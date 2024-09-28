class Song{
  constructor(songId, songData){
    this.songData = songData;
    this.id = songId;

    console.log('Song: ',this);
  }
}

export default Song;