const express = require('express');
const request = require('request');
const app = express();

/** 설정(과제 하는데 중요치 않으니 신경 안써도 되는 부분.) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
/** 설정 */

const apiUri = 'http://localhost:4001';

app.get('/', (req, res) => {
    res.render('index', {
        title: '과제',
        subject: 'Hello 과제'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: '과제',
        subject: '로그인'
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: '과제',
        subject: '회원가입'
    });
});

app.get('/users', (req, res) => {
    request(`${apiUri}/users`, (err, response, body) => {
        res.render('users', {
            userList: JSON.parse(body)
        });
    });
});

app.post('/login', (req, res) => {
    request(`${apiUri}/users`, (err, response, body) => {
        const user = JSON.parse(body).find((user) => user.email === req.body.email);
        if (!user) return res.send('회원이 아닙니다');
        if (user.password !== req.body.password) return res.send('비번이 틀렸습니다');

        res.send(`${user.name}님 어서오세요`);
        console.log(req.body);
    });
});

app.post('/register', (req, res) => {
    request(`${apiUri}/register`,{
        method: 'POST',
        form: req.body
    }, (err, response, body) => {
        console.log(req.body);
        res.redirect('/login');
    })
});

app.listen(4000);
