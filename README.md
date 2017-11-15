# web_player

Very simple web player for lazy people like me

Just copy and paste the content of web_player.js into your browser's console and enjoy start/pause article reading

# Usage

Just copy in your browser's console:

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)){ return; }
    js = d.createElement(s); js.id = id;
    js.onload = function(){
        // remote script has loaded
    };
    js.src = "https://s3.amazonaws.com/web-player-js/web_player.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'web-player-js'));