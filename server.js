const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.PORT ||3000, function() {
  
})

app.get('/scoreJSON', (request,response)=>{
	var data = {};
	axios.get('http://www.nfl.com/liveupdate/scores/scores.json').then((resp) => {
		data = resp.data;
		console.log(data);
		response.send(resp.data);
	});
})

