const express = require('express');
const app = express();

/** 설정(과제 하는데 중요치 않으니 신경 안써도 되는 부분.) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
/** 설정 */


const userDB = [{
    email: 'suho.kim1@gmail.com',
    password: '1234',
    name: '김수호1'
},
    {
        email: 'suho.kim2@gmail.com',
        password: '1234',
        name: '김수호2'
    }
    ];

app.get('/users', (req, res) => {
    res.send(userDB);
});


app.listen(4001);