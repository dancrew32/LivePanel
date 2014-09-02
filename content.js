(function(run) {
	var s = document.createElement('script');
	s.type= 'text/javascript';
	s.textContent = '('+ run.toString() +')()';
	(document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(s);
}(function() {
	var watch = function() {
		var context = $('#live');
		var click = function() {
			var current_focus = $(':focus');
			if (!current_focus.is('textarea, input'))
				$('.refresh_row', context).click()
		};
		setInterval(click, 2000);
	};
	$(watch);
}));
