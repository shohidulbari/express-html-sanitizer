# express-html-sanitizer
`express-html-sanitizer` provides a middleware for <a href="http://expressjs.com/">Express JS</a>  to cleanup/sanitize `JSON` request body in express `RESTful Service` or in any `JSON` input containing unwanted `HTML` tags.

`express-html-sanitizer` uses excellent <a href="https://www.npmjs.com/package/sanitize-html">sanitize-html</a> module recursively for sanitizing `JSON` data with unwanted `HTML` tags. You can  put this middleware at root level to sanitize request body and provide a clean html sanitized payload for next middleware.

# Requirements
`express-html-sanitizer` is intended for use with Express JS as a middleware. That's pretty much it. `express-html-sanitizer` is built on the excellent `sanitize-html` module.

## How to use
Install module:
```bash
npm install express-html-sanitizer
```
Import the module:
```js
const sanitizer  = require('express-html-sanitizer')
```
Get the middleware:
```js
const sanitizeReqBody = sanitizer();
```

you can make some configuration for allowed tags and other like exactly <a href="https://www.npmjs.com/package/sanitize-html">sanitize-html</a> and pass it as argument to get configured middleware. For details configuration you can see <a href="https://www.npmjs.com/package/sanitize-html">sanitize-html</a> module documentation.
```js
config = {
	allowedTags:  [  'b',  'i',  'em',  'strong',  'a'  ],
	allowedAttributes:  {'a':  [  'href'  ] },
	allowedIframeHostnames:  ['www.youtube.com']
}
const sanitizeReqBody = sanitizer(config);
```
Add a json `body-parser` middleware
```js
app.use(require('body-parser').json());
```

Now use it in your `Express App` . 
```js
app.use(sanitizeReqBody);
```
### Boom!!

## Full Example
```js
const express = require('express');
const sanitizer = require('express-html-sanitizer');
const app = express();

//Make some custom configuration if you want(optional)
config = {
	allowedTags:  [  'b',  'i',  'em',  'strong',  'a'  ],
	allowedAttributes:  {'a':  [  'href'  ] },
	allowedIframeHostnames:  ['www.youtube.com']
}

//Get the middleware
const sanitizeReqBody = sanitizer(config);

//Add body-parser middleware
app.use(require('body-parser').json());

//Add express-html-sanitizer middleware
app.use(sanitizeReqBody);

app.post('/post', (req, res, next) => {
	//get sanitized req.body
})

app.listen(8080, ()=> {
	console.log("Express server started");
})
``` 

# Support
Fell free to open issues on <a href="">github</a>

