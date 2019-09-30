const express = require('express');
const app = express();

/** 설정(과제 하는데 중요치 않으니 신경 안써도 되는 부분.) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/** 설정 */

const userDB = [{
    email: 'suho.kim2@gmail.com',
    password: '1234',
    name: '김수호'
}, {
    email: 'suho@gmail.com',
    password: '1234',
    name: '수호'
}, {
    email: 'aaaaa@gmail.com',
    password: '1234',
    name: '홍길동'
}, {
    email: 'kyh@gmail.com',
    password: '1234',
    name: '김영희'
}];

app.get('/users', (req, res) => {
   res.send(userDB);
});

app.post('/register', (req, res) => {

    const user = userDB.find((user) => user.email === req.body.email);
    if (user) return res.status(409).send('이미 존재하는 회원입니다').end();

    userDB.push({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    res.end();
});


app.listen(4001);