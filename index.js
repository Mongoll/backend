import express from 'express'

const PORT = 5000;

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({message: 'Hello, this is get response'})
} )
app.post('/', (req, res) => {
    res.status(200).send({message: 'Hello, this is post response'})
} )
app.put('/', (req, res) => {
    res.status(200).send({message: 'Hello, this is put response'})
} )
app.delete('/', (req, res) => {
    res.status(200).send({message: 'Hello, this is delete response'})
} )
app.patch('/', (req, res) => {
    res.status(200).send({message: 'Hello, this is patch response'})
} )

app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))