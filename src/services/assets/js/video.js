const video = document.querySelector('video')

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    // video[method]();
}

video.addEventListener('click', togglePlay);