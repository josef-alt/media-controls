console.log('file opened');

// wait for file to load
document.addEventListener("DOMContentLoaded", function() {
	console.log('loaded');
	
	// TODO find media element
	
	// observe resizing
	const observer = new ResizeObserver(() => {
		console.log('resized');
		
		// TODO handle video resizing
	});
	
	observer.observe(document.documentElement);
});