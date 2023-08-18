import express from 'express'
import { sequelize } from './database/conecta.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Sistema de Cadastro de Filmes')
})

async function conecta_db() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida.');
    } catch (error) {
        console.error('Impossível conectar ao banco de dados:', error);
    }
}
conecta_db()


app.listen(port, () => {
    console.log(`API de Filmes Rodando na Porta ${port}`)
})

