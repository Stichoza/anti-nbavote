chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			
			// http://stackoverflow.com/a/24107550/1115262
			function closest(el, selector) {
				var matchesFn;

				['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
					if (typeof document.body[fn] == 'function') {
						matchesFn = fn;
						return true;
					}
					return false;
				})

				var parent;

				while (el) {
					parent = el.parentElement;
					if (parent && parent[matchesFn](selector)) {
						return parent;
					}
					el = parent;
				}

				return null;
			}
			
			setInterval(function () {
				document.querySelectorAll('[href*="/hashtag/nbavote"]').forEach(function(e, i) {
					closest(e, '.userContentWrapper').remove();
				});
			}, 100);
			
		}
	}, 10);
});