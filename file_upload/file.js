var fs = require('fs');
var request = require('request');

//var url = "http://fuss.alpha.elenet.me/f/66/c6e87a5c64891efaa085883ba9d2dpng.png";

//fs.readFile(url, function (err, data) {
//  console.log(data.toString());
//});

//request(url).pipe(fs.createWriteStream('asbc.png'));

//fs.writeFileSync(file, bitmap);

//var url='http://localhost:8080/huskar-api/Fusses/getFileStream?url=f66c6e87a5c64891efaa085883ba9d2dpng&access_token=ff85f682-5316-4815-88c2-554784e41bfd';
//
//request(url, function (err, response, body) {
//  //console.log(err);
//  //console.log(response);
//  console.log(body);
//
//});



var fileReadStream = fs.createReadStream('./B8.png',{
  flags: 'r',
  encoding: null,
  mode: 0666
});

var fileWriteStream = fs.createWriteStream('./gg2.png',{
  flags: 'a',
  encoding: null,
  mode: 0666
});


fileReadStream.on('data',function(data){
  console.log('readData');
  fileWriteStream.write(data);
});

//fileReadStream.on('end',function(){
//  console.log('readStream end');
//  fileWriteStream.end();
//});
