// constant used for easy access to width attribute
const docElement = document.documentElement;

// find media element
const video = document.querySelector('video');

// constant used for scaling media elements
const SCALE_FACTOR = 0.85;

// setup resizing
function reactiveResize() {
	// observe resizing
	const observer = new ResizeObserver(() => {
		// apply scale factor to new window size
		const newWidth = SCALE_FACTOR * docElement.clientWidth;
		video.width = newWidth;
	});

	observer.observe(docElement);
}

// setup key-binds
function bindControls() {
	// adding keyboard controls
	document.addEventListener('keydown', function(event) {
		switch(event.key) {
			case 'ArrowLeft':
				video.currentTime -= 5;
				break;
			case 'ArrowRight':
				video.currentTime += 5;
				break;
			case 'j':
				video.currentTime -= 10;
				break;
			case 'l':
				video.currentTime += 10;
				break;
			case 'k':
				if(video.paused) {
					video.play();
				} else {
					video.pause();
				}
				break;
			case 'Home':
				video.currentTime = 0;
				break;
			case 'End':
				video.currentTime = video.duration;
				break;
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				const pressed = event.key.charCodeAt(0) - 48;
				if(pressed >= 0 && pressed <= 9) {
					const oldTime = video.currentTime;
					video.currentTime = video.duration * pressed / 10;
					
					// based on YouTube's behavior when jumping to a percentage
					// if playing or paused, it jumps without switching
					// if at the end, it resumes playing
					if(oldTime === video.duration) {
						video.play();
					}
				}
				break;
		}
	});
}

// make sure the focused file is a video before trying to modify it
if(video) {
	reactiveResize();
	bindControls();
}
