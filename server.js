const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.PORT ||8000, function() {
  
})

app.get('/',(request,response)=>{
	response.sendFile(__dirname + "/index.html");
})
app.get('/scoreJSON', (request,response)=>{
	var data = {};
	axios.get('http://www.nfl.com/liveupdate/scores/scores.json').then((resp) => {
		response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.send(resp.data);
	});
})

