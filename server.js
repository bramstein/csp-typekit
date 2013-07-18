var express = require('express'),
    app = express();

var policy = [
  // Default restrictive setting
  "default-src 'self'",

  // use.typekit.net: needed for the typekit javascript
  "script-src 'self' use.typekit.net",

  // 'unsafe-inline': needed for font events
  // use.typekit.net: needed for the typekit CSS
  "style-src 'self' 'unsafe-inline' use.typekit.net",

  // data://: needed for embedded base64 encoded fonts
  // use.typekit.net: needed for externally loaded fonts
  "font-src 'self' data://* use.typekit.net",

  // p.typekit.net: used for tracking font usage and paying foundries
  "img-src 'self' p.typekit.net"
];

app.configure(function () {
  app.use(function (req, res, next) {

    // Chrome 25+, Firefox 23+
    res.setHeader('Content-Security-Policy', policy.join(';'));

    // Firefox 4+
    res.setHeader('X-Content-Security-Policy', policy.join(';'));

    // Chrome 14+, Safari 6+
    res.setHeader('X-WebKit-CSP', policy.join(';'));

    next();
  });

  app.use(express.static(__dirname));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.listen(3000);
