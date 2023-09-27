
import express from 'express'
import cors from 'cors'
import db from './database/database.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// mostrar developers
app.get('/developers', (req, res) => {
    db.query('SELECT * FROM developers', (err, results) => {
        if (err) {
            console.error('error en la consulta')
            res.status(500).send('error en la consulta')
            return
        }

        res.json(results)
    })
})

app.listen(port, () => {
    console.log(`server en port: ${port}`)
})