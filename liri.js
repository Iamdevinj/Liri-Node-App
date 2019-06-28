// require("dotenv").config();
// links to keys page for all my api keys
var keys = require("./keys.js");
// everything required for spotify to run 
// taken from the NPM website
var Spotify = require('node-spotify-api');
// NPM 'REQUEST" FOR OMDB
var request = require('request');
 
var spotify = new Spotify({
  id: "f996156fade64ed596ead2ebb559b6ea",
  secret: "096694258cd54fa387f1f476d3418903"
});

var getArtistNames = function(artist){
    return artist.name
}

var getSpotify = function(songName) { 

spotify.search({
     type: 'track', 
     query: songName }, 
     function(err, data) {

  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }

  var songs = data.tracks.items;
  for(var i=0; i<songs.length; i++) {
      console.log(i);
      console.log('artist(s): ' + songs[i].artist.map(
          getArtistNames));
          console.log('song name: ' + songs[i].name);
          console.log('preview song: ' + songs[i].preview_url);
        //   console.log('album: ' = songs[i].album.name);
          console.log('================================');
      }
 
console.log(data.tracks.items[0]); 
});
}

// DATA FROM OMDB
var getMovie =function(movieName){
    requestAnimationFrame('http:www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error,response,body) {
        if(!error && response.statusCode == 200) {
        console.log(body);    
        }
    })
}

// SWITCH STATMENTS USED TO GRAB DATA FROM THE DIFFERENT API'S
var pick = function(caseData,functionData){
    switch(caseData) {
        case 'spotify-this-song':
            getSpotify(functionData);
            break;
        case 'movie-this':
             getMovie(functionData)    
        default:
         console.log("LIRI does not know that");

            
    }
}
// var bandsintown = require('bandsintown')("codingbootcamp");
 
// bandsintown
//   .getArtistEventList('Skrillex')
//   .then(function(events) {
//     // return array of events
//   });