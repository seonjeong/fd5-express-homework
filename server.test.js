const request = require('supertest');
const app = require('./server.js');

describe('login 페이지 테스트', () => {

    test('실패 - 아이디 없음',(done)=>{
        request(app).post('/login')
            .send({email: 'suho.kim2@gmail.comAAA',password:'1234'})
            .then((response)=> {
                expect(response.text).toBe('회원이 아닙니다');
                done();
            });
    });

    test('실패 - 비번 불일치',(done)=>{
        request(app).post('/login')
            .send({email: 'suho.kim2@gmail.com',password:'12341234'})
            .then((response)=> {
                expect(response.text).toBe('비번이 틀렸습니다');
                done();
            });
    });

    test('성공',(done)=>{
        request(app).post('/login')
            .send({email: 'suho.kim2@gmail.com',password:'1234'})
            .then((response)=> {
            expect(response.text).toBe("김수호님 어서오세요");
            done();
        });
    });
});