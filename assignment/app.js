//declaration
const express 				= require('express');	
const bodyParser 			= require('body-parser');
const exSession 			= require('express-session');


const  home                = require('./controllers/home');
const cookieParser 			= require('cookie-parser');
const  admin                = require('./controllers/admin');
const  ahome                = require('./controllers/ahome');
const  login                = require('./controllers/login');
const logout				= require('./controllers/logout');
const register				= require('./controllers/register');
const  user                 = require('./controllers/user');
const  uhome                = require('./controllers/uhome');
const product               = require('./controllers/product');
const port					= 3000;
const app					= express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/admin',admin);
app.use('/home',home);
app.use('/ahome',ahome);
app.use('/login',login);
app.use('/logout', logout);
app.use('/user',user);
app.use('/uhome',uhome);
app.use('/register',register);
app.use('/product',product);


//router
app.get('/', (req, res)=>{
	res.send('Welcome to  our cloth store');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});
//express validator