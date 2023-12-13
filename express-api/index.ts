import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.status(401).json({
        status: false,
        msj: 'token invalid'
    })

    // res.json({
    //     message: 'Hello World!',
    //     password: '123456',
    //     username: 'admin'
    // })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})