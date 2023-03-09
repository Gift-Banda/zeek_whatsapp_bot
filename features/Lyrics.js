const lyricsFinder = require("@jeve/lyrics-finder");


function GetLyrics(q){
lyricsFinder.LyricsFinder(q).then((data) => {
  console.log(data);
})
}

module.exports = GetLyrics