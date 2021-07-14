const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const stock = require('./api-management/stockPrices.js');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
const userCredentials = require('./database-management/userInfo.js');
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'files')))
app.use('/newAccount',(req,res)=>{
    res.render('newUser');
})



app.use('/Create-User',async (req, res) => {
    console.log(req.body.user)
    console.log(req.body.pass)
    const username = req.body.user
    try{
        const hashedPassword = await bcrypt.hash(req.body.pass,10);
    const userData = new userCredentials({
        username : req.body.user,
        password : hashedPassword
    });
    userData.save((err)=>{
        if(err){
            res.type('html').status(500);
            res.send('Error' + err);
            return;
        }
        else{
            res.render('backTopage',{value : username});
        }
    });
    }catch(err) {
        console.log(err);
    }
})

app.listen('2000',()=>{
    console.log('listening on port 2000');
})