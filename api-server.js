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
app.post('/register', (req, res)=>{
    userDB.push(req.body);
    res.send('성공');
});
app.listen(4001);
