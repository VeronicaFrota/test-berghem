const express = require('express')
const request = require('request')
const cors = require('cors')


const BASE_URL = 'https://api.clashofclans.com/v1'
const TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJiZjRkMDJmLTM5OWYtNGNhNy04NzU4LWQwYmU5ZTViZWI5ZiIsImlhdCI6MTU3NjI0MDk3OCwic3ViIjoiZGV2ZWxvcGVyLzQ0NDZkYWYyLWIwZTMtY2IyZC03ODA1LThhY2MxOGQxYTQ4ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny43NS45OS4yIl0sInR5cGUiOiJjbGllbnQifV19.BlPqIYeih9muUTb0uPZkHptSx73-iNQNkKBXN9yw1hikXYITS6LIBOgJHMNcVjVdQOuyIamqwCg78x1zFzJojQ'

const app = express()                           // executa a função express

app.use(cors())                                 // Libera o cors

app.all('/**', async function(req, res) {       // aceita todos os métodos
    request.get(BASE_URL + req.url, {headers: {Authorization: TOKEN}}, (error, response, body) => {
        res.status(response.statusCode)         // Pega o status da API e adiciona
        //res.send(JSON.parse(body))            // Converte a resposta para Json
        res.send(JSON.parse(JSON.stringify(body)))
    })
})

app.listen(3000)
