require("dotenv").config();
// require("dotenv").config();
// links to keys page for all my api keys
var keys = require("./keys.js");
const util = require("util");
// everything required for spotify to runtaken from the NPM website
var Spotify = require("node-spotify-api");
// NPM 'REQUEST" FOR OMDB
var request = require("request");
var moment = require ('moment');
var fs = require ("fs"); 

var spotify = new Spotify(keys.spotify);

var getSpotify = function(songName) {
  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        // console.log('song', songs[i]);
        //  console.log(
        //    "artist(s): " +
        //      util.inspect(songs[i].artists, { showHidden: false, depth: 1 })
        //  );
        console.log(
          "*************************************************************************"
        );
        console.log("SONG ARTIST: " + songs[i].artists[0].name);
        console.log("SONG NAME: " + songs[i].name);
        console.log("ALBUM: " + songs[i].album.name);
        console.log("PREVIEW SONG: " + songs[i].preview_url);
        console.log(
          "========================================================================"
        );
      }

      //console.log(data.tracks.items[0]);
    }
  );
};

// DATA FROM OMDB
var getMovie = function(movieName) {
  request(
    "http:www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonData = JSON.parse(body);
        console.log("Title: " + info.Title);
        console.log("Release Year: " + info.Year);
        console.log("OMDB Rating: " + info[0].Value);
        console.log("Rating: " + info[1].Value);
        console.log("Country: " + info.Country);
        console.log("Language: " + info.Language);
        console.log("Plot: " + info.Plot);
        console.log("Actors: " + info.Actors);
      }
    }
  );
};

// SWITCH STATMENTS USED TO GRAB DATA FROM THE DIFFERENT API'S
var pick = function(command, functionData) {
  switch (command) {
    case "spotify-this-song":
      getSpotify(functionData);
      break;
    case "movie-this":
      getMovie(functionData);
      break;
    default:
      console.log("LIRI does not know that");
  }
};

pick(process.argv[2], process.argv[3]);
// BANDS IN TOWN API
// var bandsintown = require('bandsintown')("codingbootcamp");

// bandsintown
//  .getArtistEventList('Skrillex')
// .then(function(events) {
//  });
