const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routers/api');
const bodyParser = require('body-parser');
const cors = require('cors');

//db
require('./db/mongoose');

//parsers
//Content-type: application/json
app.use(bodyParser.json());

//fix cors
app.use(cors());

//routers
app.use('/api', apiRouter);

//server
app.listen(port, function() {
    console.log('serwer słucha... http://localhost:' + port);
});