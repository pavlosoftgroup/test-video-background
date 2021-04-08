function onResizeVideoBox (width, height) {
  var videoBox = document.getElementsByClassName('video-box')
  console.log(videoBox)
  if (videoBox.length) {
    if (height > width / 1.7) {
      videoBox[0].classList.add('vertical')
    }
    else {
      videoBox[0].classList.remove('vertical')
    }
  }
}

function checkBgrOrientation () {
  var h = window.innerHeight;
  var w = window.innerWidth;
  onResizeVideoBox(w, h);
}

window.onresize = () => {
  var h = window.innerHeight;
  var w = window.innerWidth;
  onResizeVideoBox(w, h);
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
var videoId = '_IdwX1S_Ad4';
if (!origin) {
  var origin = window.location.origin;
}

function onYouTubePlayerAPIReady () {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
      'origin': origin,
      'playlist': videoId,
      'autoplay': 1,
      'mute': 1,
      'loop': 1,
      'autohide': 1,
      'title': 0,
      'controls': 0,
      'rel': 0,
      'fs': 0,
      'showinfo': 0,
      'cc_load_policy': 0,
      'iv_load_policy': 3,
      'modestbranding': 1,
    },
    events: {
      'onReady': onPlayerReady,
    }


  });
}

function onPlayerReady (event) {
  // var videoUrl = event.target.getVideoUrl();
  // var videoId = event.target.getVideoId();
  event.target.playVideo();
  // var frame = event.target.getIframe();
  // var iframe = document.getElementById('ytplayer');
  // doubleRequest();
  // console.log('frame', iframe)
}
checkYoutubeVideoStart(videoId);


function checkYoutubeVideoStart (videoId) {
  (function ($) {
    var iframe = document.getElementById('ytplayer');
    var img = document.getElementById('thumbnail-youtube-img');
    if (img) img.src = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
    $(frames['frame']).ready(function () {
      setTimeout(() => {
        $('#ytplayer-js-wrapper').removeClass('hide');
        $('#ytplayer-thumbnail-wrapper').addClass('hide');
        // $('#ytplayer-thumbnail-wrapper').hide()
      }, 5000)
    });
  })(jQuery);
}

window._wq = window._wq || [];
_wq.push({
  id: "7549lonrs9",
  options: {
    origin: origin,
    autoPlay: true,
    muted: true,
    playlistLoop: true,
    endVideoBehavior: 'loop',
    playbar: false,
    playbackRateControl: false,
    branding: false,
    playButton: false,
    smallPlayButton: false,
    volumeControl: false,
    qualityControl: false,
    fullscreenButton: false,
    controlsVisibleOnLoad: false,
  },
});

function doubleRequest () {


  (function ($) {
    $(window).ready(function () {
      var iframe = document.getElementById('ytplayer');
      var frame = window.frames['frame'];
      window.onload = function () {
        try {
          // var url = frame.contentWindow;
        }
        catch (e) {
          alert(e)
        }
      }


      console.log('33333333333333', frame);
      $.ajax({
        type: 'GET',
        url: iframe.src,
        headers: {
          // "Origin": 'https://www.youtube.com',
          "Origin": origin,
          // "Accept": "application/x-www-form-urlencoded"
        },
        data: "",
        processData: false,
        success: function (data) {
          frame.innerText = data;
          console.log('000000000000000000000000', parse_str(data));
        }
      });

    });


  })(jQuery);


  // window.onload = function (){}


}

function parse_str (str, array) {	// Parses the string into variables
                                   //
                                   // +   original by: Cagri Ekin
                                   // +   improved by: Michael White
                                   // (http://crestidg.com)

  var glue1 = '=';
  var glue2 = '&';

  var array2 = str.split(glue2);
  var array3 = [];
  for (var x = 0; x < array2.length; x++) {
    var tmp = array2[x].split(glue1);
    array3[unescape(tmp[0])] = unescape(tmp[1]).replace(/[+]/g, ' ');
  }

  if (array) {
    array = array3;
  }
  else {
    return array3;
  }
}


// $.ajax({
//   type: 'GET',
//   url: 'http://www.youtube.com/get_video_info?video_id=' + 'M7lc1UVf-VE',
//   headers: {
//     "Origin": origin,
//     "Accept": "application/x-www-form-urlencoded"
//   },
//   data: "",
//   processData: false,
//   success: function(data) {
//     console.log('000000000000000000000000',parse_str(data));
//   }
// });

function initial () {
  (function ($) {

    $(window).ready(function () {

      checkBgrOrientation();

    });
  })(jQuery);

}

initial();