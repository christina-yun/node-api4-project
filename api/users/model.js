const { nanoid } = require('nanoid');

function getId(){
    return nanoid().slice(0, 5);
}

const initializeUsers = () => ([
    { id: getId(), username: 'stinabitten', password: 'tacocat'},
    { id: getId(), username: 'usagi_tsukino', password: 'batsOnIce'},
    { id: getId(), username: 'currypowder', password: 'dosa'},
])

let users = initializeUsers();

//getting an array of users
const findUsers = () => {
    return Promise.resolve(users);
}

//creating a new user
const registerUser = ({ username, password }) => {
    const newUser = { id: getId(), username, password };
    users.push(newUser);
    return Promise.resolve(newUser);
}

//logging in a user
const loginUser = ({ username, password }) => {
    const user = users.find(person => { person.username === username && person.password === password });

    return Promise.resolve(user);
}

module.exports = {
    findUsers,
    registerUser,
    loginUser
}