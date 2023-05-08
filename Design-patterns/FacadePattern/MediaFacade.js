import AudioPlayer from "./AudioPlayer.js";
import VideoPlayer from "./VideoPlayer.js";

class MediaFacade {
  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.videoPlayer = new VideoPlayer();
  }

  play() {
    this.audioPlayer.playMusic();
    this.videoPlayer.playVideo();
  }

  pause() {
    this.audioPlayer.pauseMusic();
    this.videoPlayer.pauseVideo();
  }

  stop() {
    this.audioPlayer.stopMusic();
    this.videoPlayer.stopVideo();
  }
}

let media = new MediaFacade();
console.log(media.play());
console.log(media.pause());
console.log(media.stop());
