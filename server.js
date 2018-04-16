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
	response.send(data);
});

app.get('/images-2018',(request,response) => {
  var data = {
    "0":"https://scontent-lhr3-1.cdninstagram.com/vp/083a808a4b0d7edbdfa2f911cc42102d/5B540A36/t51.2885-15/s640x640/sh0.08/e35/27880379_539719523093485_7561558132430733312_n.jpg",
    "1":"https://scontent-lhr3-1.cdninstagram.com/vp/2fc43cdcad8f0bf15b8d2bb4f95a2cb3/5B6B90D5/t51.2885-15/e35/23507829_1982430162015288_2608747334405718016_n.jpg",
    "2":"https://scontent-lhr3-1.cdninstagram.com/vp/6e34c2d4b24077282581160393d6f9cf/5B4FF28D/t51.2885-15/e35/15251724_240986779652739_8479659167781486592_n.jpg",
    "3":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg"
  };
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(data);
});

