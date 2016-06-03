/**
 * Created by leo on 2015/5/21.
 */
var dns = require('dns');

//dns.lookup('google.com', function (err, addresses) {
//    console.log(addresses);
//});

dns.lookup('baidu.com', function (err, addresses) {
  console.log(addresses);
});

dns.reverse('123.125.114.144', function (err, domains) {
  if (err)
    console.log(err);
  else
    console.log(domains);
});
