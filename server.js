const express = require('express');
const axios = require('axios');
const app = express();

app.listen(process.env.PORT ||8000, function() {
})

app.get('/',(request,response)=>{
	response.sendFile(__dirname + "/index.html");
})

app.get('/images/gitlogo',(request,response)=>{
	response.sendFile(__dirname + "/images/Octocat.png");
})

app.get('/scoreJSON', (request,response)=>{
	var data = {};
	axios.get('http://www.nfl.com/liveupdate/scores/scores.json').then((resp) => {
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.send(resp.data);
	});
})

app.get('/fakescoreJSON',(request,response)=>{
	var data = 					{ "0":{
                                      "home":{"abbr":"PHI","score":{"T":"51"}},
                                      "away":{"abbr":"GB","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "1":{
                                      "home":{"abbr":"LA","score":{"T":"51"}},
                                      "away":{"abbr":"TEN","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "2":{
                                      "home":{"abbr":"JAX","score":{"T":"51"}},
                                      "away":{"abbr":"LAC","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "3":{
                                      "home":{"abbr":"CIN","score":{"T":"51"}},
                                      "away":{"abbr":"KC","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "4":{
                                      "home":{"abbr":"CLE","score":{"T":"51"}},
                                      "away":{"abbr":"IND","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "5":{
                                      "home":{"abbr":"NYG","score":{"T":"51"}},
                                      "away":{"abbr":"PIT","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "6":{
                                      "home":{"abbr":"SF","score":{"T":"51"}},
                                      "away":{"abbr":"NYJ","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "7":{
                                      "home":{"abbr":"HOU","score":{"T":"51"}},
                                      "away":{"abbr":"MIA","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12"
                                      },
                                  "8":{
                                      "home":{"abbr":"MIN","score":{"T":"29"}},
                                      "away":{"abbr":"NO","score":{"T":"24"}},
                                      "qtr":"4","clock":"00:00"
                                      }
                                  };
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.send();
})

