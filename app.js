const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
	console.log('Hello World!')	
   	res.send('Hello World! EC2-HK')
})

app.post('/test', (req, res) => {
	res.set('x-toke', 'dhfjksfjkasdl;fjd;salk')
	res.json(req.body)
})

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})
