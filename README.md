## Using the Content Security Policy with Typekit

This is a simple example of how to use the Content Security Policy (CSP) with Typekit. You'll need the following security policy exceptions to get Typekit to work:

    // use.typekit.net: needed for the typekit javascript
    script-src 'self' use.typekit.net;

    // 'unsafe-inline': needed for font events
    // use.typekit.net: needed for the typekit CSS
    style-src 'self' 'unsafe-inline' use.typekit.net;

    // data://: needed for embedded base64 encoded fonts
    // use.typekit.net: needed for externally loaded fonts
    font-src 'self' data://* use.typekit.net;

    // p.typekit.net: used for tracking font usage and paying foundries
    img-src 'self' p.typekit.net;
