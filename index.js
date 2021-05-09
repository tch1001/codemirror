const path = require('path')
const express = require('express')
const app = express()
// const server = require('http').Server(app);
const port = 3000
const server = app.listen(port, () => {
	console.log(`listening on ${port}`)
})
const io = require('socket.io')(server,{allowEIO3: true});

app.use('/lib', express.static('static/lib'))
app.use('/mode', express.static('static/mode'))
app.use('/socket.io', express.static('node_modules/socket.io'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

io.on('connection', (client) => {
	console.log('client connected')
	client.on('start', () => {
		console.log("start")
	});
});

app.get('/', (req,res) => {
	res.render("index")
})
