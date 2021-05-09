const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/lib', express.static('lib'))
app.use('/mode', express.static('mode'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res) => {
	res.render("index")
})
app.listen(port, () => {
	console.log(`listening on ${port}`)
})
