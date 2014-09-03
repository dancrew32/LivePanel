(function(run) {
	var s = document.createElement('script');
	s.type= 'text/javascript';
	s.textContent = '('+ run.toString() +')()';
	(document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(s);
}(function() {
	var blacklist = {
		closest: '.filter_container',
		input: 'textarea, input'
	};
	var watch = function() {
		var context = $('#live');
		var click = function() {
			var current_focus = $(':focus');
			var should_click = !current_focus.is(blacklist.input) && !current_focus.closest(blacklist.closest).length;
			if (should_click)
				$('.refresh_row', context).click()
		};
		setInterval(click, 2000);
	};
	$(watch);
}));
