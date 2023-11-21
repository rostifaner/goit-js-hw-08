import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
iframe.style.display = 'block';
iframe.style.margin = 'auto';
const player = new Player(iframe);
const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

const onPlay = throttle(function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}, 1000);

if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
player.on('timeupdate', onPlay);
localStorage.clear();
