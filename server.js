import {getCurrentWeeksGameInfo} from './getNflData.js';
import express from 'express';
import {blogData} from './data/blogdata.js';

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
    getCurrentWeeksGameInfo().then((resp) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        if (resp) {
            response.send(resp)
        }
        else {
            response.status(400)
        }
	});
})

app.get('/fakescoreJSON',(request,response)=>{
	var data = 					{ "2017090900":{
                                      "home":{"abbr":"PHI","score":{"T":"51"}},
                                      "away":{"abbr":"GB","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090901":{
                                      "home":{"abbr":"LA","score":{"T":"51"}},
                                      "away":{"abbr":"TEN","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090902":{
                                      "home":{"abbr":"JAX","score":{"T":"51"}},
                                      "away":{"abbr":"LAC","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090903":{
                                      "home":{"abbr":"CIN","score":{"T":"51"}},
                                      "away":{"abbr":"KC","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090904":{
                                      "home":{"abbr":"CLE","score":{"T":"51"}},
                                      "away":{"abbr":"IND","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090905":{
                                      "home":{"abbr":"NYG","score":{"T":"51"}},
                                      "away":{"abbr":"PIT","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090906":{
                                      "home":{"abbr":"SF","score":{"T":"51"}},
                                      "away":{"abbr":"NYJ","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090907":{
                                      "home":{"abbr":"HOU","score":{"T":"51"}},
                                      "away":{"abbr":"MIA","score":{"T":"10"}},
                                      "qtr":"Final","clock":"13:12","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      },
                                  "2017090908":{
                                      "home":{"abbr":"MIN","score":{"T":"29"}},
                                      "away":{"abbr":"NO","score":{"T":"24"}},
                                      "qtr":"4","clock":"00:00","date":"09 - 09 - 18", "stadium":"US Bank Stadium"
                                      }
                                  };
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.send(data);
});

app.get('/images-2018',(request,response) => {
  var data = {
    "0":"https://scontent-lhr3-1.cdninstagram.com/vp/083a808a4b0d7edbdfa2f911cc42102d/5B540A36/t51.2885-15/s640x640/sh0.08/e35/27880379_539719523093485_7561558132430733312_n.jpg",
    "1":"https://scontent-lhr3-1.cdninstagram.com/vp/5b6d53b01fc3678eb34a52254529eff6/5B73B498/t51.2885-15/e35/11243669_1037019702977411_1106209711_n.jpg",
    "2":"https://scontent-lhr3-1.cdninstagram.com/vp/6e34c2d4b24077282581160393d6f9cf/5B4FF28D/t51.2885-15/e35/15251724_240986779652739_8479659167781486592_n.jpg",
    "3":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "4":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "5":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "6":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "7":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "8":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "9":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "10":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "11":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "12":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "13":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "14":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "15":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg",
    "16":"https://scontent-lhr3-1.cdninstagram.com/vp/ac7f656dc4888258a0a54f21bbebea3f/5B4F3874/t51.2885-15/e35/14547838_1118909908192996_8241986436513923072_n.jpg"
  };
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(data);
});

app.get('/blogdata',(request,response) => {
    
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(blogdata);
  });


export const server = {};