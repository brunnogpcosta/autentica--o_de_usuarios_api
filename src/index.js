const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json()); //ENTENDER REQUISIÇÕES JSON
app.use(bodyParser.urlencoded({ extended: false }));//ENTENDER PARAMETROS VIA URL

require('./controllers/authController')(app)


app.listen(3000);
