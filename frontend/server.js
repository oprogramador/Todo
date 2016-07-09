var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/app.js", function(req, res) {
  res.sendFile(__dirname + '/build/app.js')
})
app.get("/app.css", function(req, res) {
  res.sendFile(__dirname + '/build/app.css')
})
app.get('/config.js', function(req, res) {
  res.send('const CONFIG = '+JSON.stringify({BACKEND_ADDRESS: process.env.BACKEND_ADDRESS}));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
