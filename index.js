const express = require('express');
const {handleConnection} = require('./connections/user');
const {routes} = require('./routes/user');
const path = require('path');
const { handleLogin, renderLogin } = require('./controllers/userlogin');
const cookieParser = require('cookie-parser');

const app = express()
const PORT = 8000

//db connection
handleConnection('mongodb://localhost:27017/analogueitsolution')

//middleware -pluging
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

//setup viewengine
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'views'));

//routes
app.get('/',(req,res)=>{res.render('sign')})
app.get('/login',renderLogin)
app.post('/login',handleLogin)
app.use('/users',routes)

app.listen(PORT,()=>{console.log(`server is started on PORT: ${PORT}`)})