        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '50',
                width: window.innerWidth,
                playerVars: {
                    'autoplay': 0,
                    'controls': 0
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                },
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            //  event.target.playVideo();
            //  event.target.loadPlaylist('PLAWmuvmk7MzDxbag8PepWeL-ovfUvFZWD');
            event.target.loadPlaylist({
                list: "PLJiWP_BcOyda1NEBEG7Xgq_53k2_uOXR-"
            });
            //  event.target.playVideo();
            setTimeout(function () {
                event.target.setShuffle({
                    'shufflePlaylist': true
                });
                event.target.nextVideo();
                event.target.unMute();
                event.target.setVolume(100);
                player.stopVideo();
               // event.target.playVideo(); //PLAY VIDEO MUSIC
            }, 1000);


        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                // setTimeout(stopVideo, 6000);
                //  done = true;
            }
        }

        function stopVideo() {
            player.stopVideo();
        }

        function ChangeSong() {
            player.nextVideo();
        }