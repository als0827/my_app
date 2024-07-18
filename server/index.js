const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
/* request body로 전달되는 json/body를 express 서버가 
이해할 수 있게 미들웨어를 등록한다*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/home.html"); //99% index.html
})
app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/public/main.html")
})
// req: request [요청]
// res: response [응답]
app.post('/contact', function(req, res) {
    console.log(req.body);
    res.sendFile(__dirname + "/public/contact.html")
})

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })