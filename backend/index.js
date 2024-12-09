const  express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.get('/product',(req,res) => {
//     res.send('product page')
// })

const UserRouter = require('./routers/contactus')
// middleware
 app.use(express.json())
 app.use(cors({
    origin: ['http://localhost:3000'],
 }))

 app.use('/contactus' , ContactusRouter)

app.listen(port,() => {
    console.log(`server is running on port ${port} `)
})


// const UserRouter = require('./routers/user')
// const ContactusRouter = require('./routers/contactus')
// // middleware
//  app.use(express.json())
//  app.use(cors({
//     origin: ['http://localhost:3000'],
//  }))

//  app.use('/user' , UserRouter)
//  app.use('/contactus' , ContactusRouter)

// app.listen(port,() => {
//     console.log(`server is running on port ${port} `)
// })



