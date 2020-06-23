$( document ).ready(function() {
  console.log( "ready!" );
  let abc = "abc"
  //edee
  // dsdfsfd
  $("#btnClick").click(function(){
    $.ajax(settings).done(function (response) {
      console.log(response);
      let randomSeason =  Math.floor(Math.random() * (response.length - 0) + 0);
      console.log(randomSeason)
      let randomEp = Math.floor(Math.random() * (response[randomSeason].episodes.length - 0) + 0);
      console.log(response[randomSeason].episodes[randomEp])

      document.getElementById("title").innerHTML = response[randomSeason].episodes[randomEp].title
      document.getElementById("link").innerHTML = "https://www.netflix.com/watch/" + response[randomSeason].episodes[randomEp].epid
    });
   });


      
   var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://unogsng.p.rapidapi.com/episodes?netflixid=70136120",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "unogsng.p.rapidapi.com",
      "x-rapidapi-key": "e51b945689mshdac2c3f84cb6376p1e9eb2jsnb59224aee908"
    }
  }
  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   let randomSeason =  Math.floor(Math.random() * (response.length - 0) + 0);
  //   console.log(randomSeason)
  //   let randomEp = Math.floor(Math.random() * (response[randomSeason].episodes.length - 0) + 0);
  //   console.log(response[randomSeason].episodes[randomEp])
  // });
  
});