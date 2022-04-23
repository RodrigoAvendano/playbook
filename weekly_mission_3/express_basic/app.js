//Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, responderá la urllocalhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX')
})

//Con esto inicializamos la app
app.listen(port, () =>{
    console.log(`Example applistening on port ${port}`)
})
