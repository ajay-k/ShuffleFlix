$( document ).ready(function() {
  console.log( "ready!" );
  let abc = "abc"
  let netflixId = 70136120
  let textVal = $("#netflixIDText").val()

  // if( $("#netflixIDText").val() == null){
  //   textVal = 70136120
  // }else{
  //   textVal = $("#netflixIDText").val()

  // }
  // console.log(textVal)

  //edee
  // dsdfsfd

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://unogsng.p.rapidapi.com/episodes?netflixid=${textVal}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "unogsng.p.rapidapi.com",
      "x-rapidapi-key": "e51b945689mshdac2c3f84cb6376p1e9eb2jsnb59224aee908"
    }
  }

  $("#btnClick").click(function(){
    // alert(textVal)
    $.ajax(settings).done(function (response) {
      console.log("REsponse")
      console.log(response);
      let randomSeason =  Math.floor(Math.random() * (response.length - 0) + 0);
      console.log(randomSeason)
      let randomEp = Math.floor(Math.random() * (response[randomSeason].episodes.length - 0) + 0);
      console.log(response[randomSeason].episodes[randomEp])

      document.getElementById("title").innerHTML = response[randomSeason].episodes[randomEp].title
      document.getElementById("link").href= "https://www.netflix.com/watch/" + response[randomSeason].episodes[randomEp].epid
      document.getElementById("synopsis").innerHTML= response[randomSeason].episodes[randomEp].synopsis
      document.getElementById("epImg").src= response[randomSeason].episodes[randomEp].img
      document.getElementById("season-title").innerHTML= `Season ${randomSeason} | Episode ${randomEp}`

      console.log(settings)

      // document.getElementById("link").innerHTML = 
    });
   });

   $("#netflixIdBtn").click(function(){
    //  alert("HELLO");
    //  alert(textVal)
     console.log("Button clicked");
     textVal = $("#netflixIDText").val()
     netflixId = textVal
     var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://unogsng.p.rapidapi.com/episodes?netflixid=${netflixId}`,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "unogsng.p.rapidapi.com",
        "x-rapidapi-key": "e51b945689mshdac2c3f84cb6376p1e9eb2jsnb59224aee908"
      }
      }

      $.ajax(settings).done(function (response) {
   
        console.log("Response")
        console.log(response);
        let randomSeason =  Math.floor(Math.random() * (response.length - 0) + 0);
        console.log(randomSeason)
        let randomEp = Math.floor(Math.random() * (response[randomSeason].episodes.length - 0) + 0);
        console.log(response[randomSeason].episodes[randomEp])

        // if(typeof(response[randomSeason]) === "undefined"){
        //   alert("Error, please check the Netflix and try again")
        // }
  
        document.getElementById("title").innerHTML = response[randomSeason].episodes[randomEp].title
        document.getElementById("link").href= "https://www.netflix.com/watch/" + response[randomSeason].episodes[randomEp].epid
        document.getElementById("synopsis").innerHTML= response[randomSeason].episodes[randomEp].synopsis
        document.getElementById("epImg").src= response[randomSeason].episodes[randomEp].img
        document.getElementById("season-title").innerHTML= `Season ${randomSeason} | Episode ${randomEp}`
  
        console.log(settings)
  
        // document.getElementById("link").innerHTML = 
      });
      console.log(settings)


    });

      

  
  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   let randomSeason =  Math.floor(Math.random() * (response.length - 0) + 0);
  //   console.log(randomSeason)
  //   let randomEp = Math.floor(Math.random() * (response[randomSeason].episodes.length - 0) + 0);
  //   console.log(response[randomSeason].episodes[randomEp])

  //   document.getElementById("title").innerHTML = response[randomSeason].episodes[randomEp].title
  //   document.getElementById("link").href= "https://www.netflix.com/watch/" + response[randomSeason].episodes[randomEp].epid
  //   document.getElementById("synopsis").innerHTML= response[randomSeason].episodes[randomEp].synopsis
  //   document.getElementById("epImg").src= response[randomSeason].episodes[randomEp].img

  //   // document.getElementById("link").innerHTML = 
  // });
 
  
});