
  const express = require('express') //ES5 ES6 (JavaScript)
require('dotenv').config()
const BodyParser = require('body-parser')
require('colors')

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))


let users = [
    {
        id: 1,
        name: 'Orxan',
        surname: 'Imanov',
        university: "BDU"
    },
    {
        id: 2,
        name: 'Majid',
        surname: 'Mahirov',
        university: "UNEC"
    },
    {
        id: 3,
        name: 'Namiq',
        surname: 'Ibadov',
        university: "ADA"
    },
    {
        id: 4,
        name: 'Nihat',
        surname: 'Eliyev',
        university: "ATU"
    },
]


app.get('/students', (req, res) => {
    res.json(users)
})

app.get('/students/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (user) {
        return res.json(user)
    } else {
        return res.send('User not found with the given Id!')
    }
})

app.delete('/students/:id', (req, res) => {
    const params = req.params
    users = users.filter((item) => item.id != params.id)
    return res.send('User deleted successfully!')
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})


app.patch('/students/:id', (req, res) => {
    const { id } = req.params
    const { name,surname,university } = req.body
    let user = users.find((item) => item.id == id)
    if (user) {
        user.name=name;
        user.surname=surname;
        user.university=university;
        res.status(200)
        return res.json('User updated successfull!')
    } else {
        res.status(400)
        return res.send('User not found with the given Id!')
    }
})




const PORT = 8000
//process.env.PORT1 || process.env.PORT2
app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.bold.blue))