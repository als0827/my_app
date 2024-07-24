const express = require('express');
var cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());
/* request body로 전달되는 json/body를 express 서버가 
이해할 수 있게 미들웨어를 등록한다*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {
        idx: 1,
        id: "test",
        pw: "1234",
        created: new Date("2024-07-20"),
        email: "test@naver.com",
        nick: "겁나 무서운 전사",
        cellphone: "010-1234-5678",
    },
    {
        idx: 2,
        id: "hello",
        pw: "hello1004",
        created: new Date("2024-07-22"),
        email: "helloworld@naver.com",
        nick: "헬로월드"
    }
]

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/home.html"); //99% index.html
})
app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/public/main.html")
})
// req: request [요청]
// res: response [응답]
app.post('/login', function(req, res) {
    let {user_id, user_pw } = req.body; // 각각 id, pw 정보를 비교
    console.log(req.body);
    //기존 회원 정보와 전송받은 정보를 비교 --> 일치 : 로그인 성공, 불일치 : 로그인 실패
    // 첫 페이지로 이동시키거나, 경고를 하거나.. 후속조치
    //console.log(typeof req.body);
    // 객체 : 배열 표기법, 객체의 . 표기법
    console.log("아이디 : " + req.body.user_id);
    console.log("비밀번호 : " + req.body.user_pw);
})
app.get('/chart', function(req, res) {
    res.json([
        {
            ranking: 1,
            title: '데드풀과 울버린',
            satisfy: 99,
            ratio: 44.4,
            img: 'https://i.namu.wiki/i/J2sG7tvzrl4ItQk2BcBCR9_vIB3g8SyPAE7ZqYTkklHfFOMETIPLSGbJ6Kj4pSZYa0wlOBWwyTq_3Rz0AxeS3DiGtv0HrlcGueoR4IdZB4gMCW0ydQko2hJjyEZpRYGRf091S_ymAJuxFY7sMLeHOg.webp',
            url: '/movie?cate=action&sf?code={ranking}'
        },
        {
            ranking: 2,
            title: '파일럿',
            satisfy: 99,
            ratio: 15.7,
            img: 'https://i.namu.wiki/i/J2sG7tvzrl4ItQk2BcBCR9_vIB3g8SyPAE7ZqYTkklHfFOMETIPLSGbJ6Kj4pSZYa0wlOBWwyTq_3Rz0AxeS3DiGtv0HrlcGueoR4IdZB4gMCW0ydQko2hJjyEZpRYGRf091S_ymAJuxFY7sMLeHOg.webp',
            url: '/movie?cate=action&sf?code={ranking}'
        }
    ])
})
app.post('/contact', function(req, res) {
    console.log(req.body);
    res.sendFile(__dirname + "/public/contact.html")
})

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })