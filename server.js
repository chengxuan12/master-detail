/**
 * Created by xuan on 16/4/15.
 */

var http = require('http');
var express = require('express');
var app = express();
var logger=require('morgan');
var compression=require('compression');
var path=require('path');
var configureStore=require('./src/store/configureStore')

/*
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { renderToString } from 'react-dom/server'
import Root from './src/containers/Root'
*/

app.use(compression());
app.use(logger('short'));
app.use(express.static(path.join(__dirname, 'public')));

(function initWebpack() {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
})();


app.get('/*', function root(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/* 尝试使用服务端首次渲染,出了一些问题.再之后的版本迭代中将会改善....好吧,我承认就是短时间内没搞定
//app.use(handleRender)
function handleRender(req, res) {
        const initialState = {
            item: {},
            list:[],
            items: [],
            totalPage:1,
            hadFetch:false
        }
        console.log('aaaaaaaaaaaaaaaa',renderToString)
      // Grab the initial state from our Redux store
      //  const finalState = store.getState()

        // Send the rendered page back to the client
    //    res.send(renderFullPage(html, initialState))

}
function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
         <title>master-detail</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
   `
}
*/

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Master-detail server running at localhost:' + PORT)
})
