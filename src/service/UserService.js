const request = require('request');

const apiServer = 'http://localhost:4001';

const getAllUsers = (cb) => {
    request(`${apiServer}/users`, (err, response, body) => {
        if (!body) return cb([]);
        const users = JSON.parse(body);
        cb(users);
    });
};

const findUserByEmail = (email, cb) => {
    request(`${apiServer}/user/${email}`, (err, response, body) => {
        if (!body) return cb(null);
        const user = JSON.parse(body);
        cb(user);
    });
};

const registerUser = (userData, cb) => {
    request(`${apiServer}/register`, {
        method: 'POST',
        form: userData
    }, (err, response, body) => {
        cb(body);
    });
};

module.exports = {
    getAllUsers,
    findUserByEmail,
    registerUser
};