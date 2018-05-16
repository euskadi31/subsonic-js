Subsonic
========

subsonic.js is an audio library for the modern web. It defaults to Web Audio API and falls back to HTML5 Audio.
This makes working with audio in JavaScript easy and reliable across all platforms.

Example
-------

```js
import { Subsonic } from 'subsonic';

const player = new Subsonic();

player.addEventListener('pause', (event) => {
    console.log('Audio paused');
});

player.addEventListener('start', (event) => {
    console.log('Audio started');
});

player.addEventListener('end', (event) => {
    console.log('Audio ended');
});

player.play();
```

Config developer environment
----------------------------

~~~shell
cp ./.hooks/commit-msg.sh .git/hooks/commit-msg
~~~
