	var y = 0;
	var speed = 50;
	var timer = null;

	function webPlayerScroll(){
		$(document).scrollTop(y,0);
		timer = setTimeout(webPlayerScroll, speed);
		y++;
	}

	function renderPanel(){
		$('body').append('<div id="web-player-panel" style="position:fixed;top:10px;right:10px;border:1px solid red"><div onclick="webPlayerStart()">START</div><div onclick="webPlayerStop()">PAUSE	</div></div>')
	}

	function webPlayerStart(){
		webPlayerScroll();
	}

	function webPlayerStop(){
		clearTimeout(timer);
	}


	renderPanel();

				