		var speed = 50;
		var timer = null;

		function webPlayerScroll(){
			window.scrollBy(0,1)
			timer = setTimeout(webPlayerScroll, speed);
		}

		function renderPanel(){
			var div = document.createElement('div')
			div.innerHTML = '<div onclick="webPlayerStart()">START</div><div onclick="webPlayerStop()">PAUSE</div>';
			div.setAttribute('id', 'web-player-panel');
			div.setAttribute('style', 'position:fixed;top:10px;right:10px;border-radius: 23%;background: #CCC;color: #FFF;');
			document.getElementsByTagName('body')[0].appendChild(div);
		}

		function webPlayerStart(){
			webPlayerScroll();
		}

		function webPlayerStop(){
			clearTimeout(timer);
		}


		renderPanel();