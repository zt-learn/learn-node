/**
 * Created by leo on 2015/7/14.
 */
var img = require('images');

img("ku.jpg")
  .draw()
  .save('test.jpg', {
    quality: 50
  });
