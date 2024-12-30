// constant used for easy access to width attribute
const docElement = document.documentElement;

// find media element
const video = document.querySelector('video');

// constant used for scaling media elements
const SCALE_FACTOR = 0.85;

// observe resizing
const observer = new ResizeObserver(() => {
	// apply scale factor to new window size
	const newWidth = SCALE_FACTOR * docElement.clientWidth;
	video.width = newWidth;
});

observer.observe(docElement);
