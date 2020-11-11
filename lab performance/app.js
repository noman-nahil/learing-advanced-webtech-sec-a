//declaration
const express 				= require('express');	
const bodyParser 			= require('body-parser');
const exSession 			= require('express-session');
const cookieParser 			= require('cookie-parser');

const login					= require('./controllers/login');
const logout				= require('./controllers/logout');
const home					= require('./controllers/home');
const ehome					= require('./controllers/ehome');
const user					= require('./controllers/user');
const employee				= require('./controllers/employee');
const app					= express();
const port					= 3000;

//configuration
app.set('view engine', 'ejs');

//middleware
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/home', home);
app.use('/ehome', ehome);
app.use('/logout', logout);
app.use('/user', user);
app.use('/employee',employee);

//router
app.get('/', (req, res)=>{
	res.send('Welcome To job portal');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});
//express validator