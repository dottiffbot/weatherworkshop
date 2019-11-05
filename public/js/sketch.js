var weatherJSON;

function preload(){
weatherJSON = loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=417941f8eb6ef816314244950431636b");

}


function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");
    frameRate(10);   
console.log(weatherJSON);
console.log(weatherJSON.cod);
console.log ("This is an array: " + weatherJSON.list[1]);
console.log(weatherJSON.list[0].clouds.all);

}

function draw(){
     background('yellow');
     fill('blue');
     for ( var i = 0; i < weatherJSON.list.length; i++){
         var weatherInfo = weatherJSON.list[i]
         //var temperature = weatherInfo.main.temp;
         var description = weatherInfo.weather[0].description
         text(description, random(0, windowHeight), i * 10)
     }
     text("hey", 10, 30);

}