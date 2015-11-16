app.post('/img', function (req, res, next) {
  var name = req.body.name;
  var url = req.body.url;

  if (url.indexOf('fuss') != -1) {
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=' + name
    });
    try {
      request(url).pipe(res);
    } catch (exception) {
      res.end();
    }
  } else {
    res.end();
  }

});
