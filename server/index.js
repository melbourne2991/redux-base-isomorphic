import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import path from 'path'
import handleRender from './handleRender'

const app = express(), port = 3001;
const compiler = webpack(webpackConfig)


app.use(handleRender)

app.listen(port, (err) => console.log(err || port && `listening on ${port}`))