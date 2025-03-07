const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
    {
        nome: 'Karizi Silva',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvovedora e Instrutora'
    },
    {
        nome: 'Isis Bueno',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'fundadora da ProGramaria'
    },
    {
        nome: 'Isabel Silva',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'haker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
   console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)