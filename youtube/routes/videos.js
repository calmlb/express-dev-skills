var express = require('express');
var router = express.Router();

let videos = [
    {id: "ElmsIGT85tI", title: "Sia - Candy Cane Lane", views: 3},
    {id: "fCkeLBGSINs", title: "Pokemon - Theme Song", views: 92340},
    {id: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up", views: 132}
]

function getVideo (incoming_id) {
    for (let current_video of videos) {
        if(current_video.id == incoming_id) {
            return current_video.title;
        }
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('video-index.ejs', {videos});
});

/* GET id*/

router.get('/:id', function(req, res, next) {
    let videoName = getVideo(req.params.id)
    res.render('video-––etails.ejs', {videoName})
    //   res.send('the id you have typed is ' + req.params.id + " which is the video name " + videoName);
});

module.exports = router;
