const users = [
    { nombre: "Luke", apellido: "Skywalker", id: 1001 },
    { nombre: "Leia", apellido: "Organa", id: 1002 },
    { nombre: "Han", apellido: "Solo", id: 1003 },
    { nombre: "Chewbacca", apellido: "Wookiee", id: 1004 },
    { nombre: "Darth", apellido: "Vader", id: 1005 }
];


const getUser = (req, res) => {
    res.json(users);
}

const createNewUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users[users.length-1].id + 1;
    users.push(newUser);
    res.json(newUser);
}

const updateUser = (req, res) => {
    req.body.id = parseInt(req.body.id);
    const userIndex = users.findIndex(user => user.id === req.body.id);
    users[userIndex] = req.body;
    res.json(users[userIndex]);
}

const deleteUser = (req, res) => {
    req.body.id = parseInt(req.body.id);
    const userIndex = users.findIndex(user => user.id === req.body.id);
    users.splice(userIndex, 1);
    res.json(users[userIndex]);
}

export default {
    getUser,
    createNewUser,
    updateUser,
    deleteUser
}