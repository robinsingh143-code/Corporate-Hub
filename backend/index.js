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
const UserRouter = require('./routers/user')
const ContactusRouter = require('./routers/contactus')
const RegisterRouter = require('./routers/register')
const AdminuserRouter = require('./routers/adminuser')
const ProductRouter = require('./routers/product')
const HubpRouter = require('./routers/hubp')
const ProfileRouter = require('./routers/addProfile')


// middleware
 app.use(express.json())
 app.use(cors({
    origin: ['http://localhost:3000'],
 }))

 app.use('/contactus' , ContactusRouter)
 app.use('/user' , UserRouter)
 app.use('/register' ,RegisterRouter)
 app.use('/adminuser', AdminuserRouter)
 app.use('/product' , ProductRouter)
 app.use('/hubp' , HubpRouter)
 app.use('/addprofile' , ProfileRouter)
 

app.listen(port,() => {
    console.log(`server is running on port ${port} `)
})


// const ContactusRouter = require('./routers/contactus')
// // middleware
//  app.use(express.json())
//  app.use(cors({
//     origin: ['http://localhost:3000'],
//  }))

//  app.use('/contactus' , ContactusRouter)

// app.listen(port,() => {
//     console.log(`server is running on port ${port} `)
// })



