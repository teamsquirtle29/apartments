const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./database/userController.js');
const managerController = require('./database/managerController.js');
const residentController = require('./database/residentController.js');
const maintenanceController = require('./database/maintenanceController.js');

app.use(bodyParser.json());

// routes for multiple user types
app.post('/user', userController.postUser, (req, res) => {
  res.status(200).json({'msg': 'successfully posted to database'});
});

app.get('/user', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.post('/event', userController.postEvent, (req, res) => {
  res.status(200).json({'msg': 'successfully posted to database'});
});

app.get('/event', userController.getEvent, (req,res)=>{
  res.status(200).json(res.locals.result);
});

app.delete('/event', managerController.deleteEvent, (req, res) => {
  res.status(200).json({'msg': 'event successfully deleted'});
});

// get message
app.get('/messages', userController.getMessages, (req, res) => {
  res.status(200).json(res.locals.result);
})
// post message
app.post('/messages', userController.postMessages, (req, res)=>{
  res.status(200).json(res.locals.result);
})
// manager routes
  // make payment as received
  // message
  // get all users (residents, maintenance, etc)
app.get('/allUsers', managerController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.result);
});

// resident routes
  // make payment
  // request maintenance
  // message

// maintenance routes
  // message landlord or residents
  // accept maintenance requests
  // end maintenance


app.listen(3000);