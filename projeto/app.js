var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var pacienteRouter = require('./routes/pacienteROUTE')
var alaRouter = require('./routes/alaROUTE')
var camaRouter = require('./routes/camaROUTE')
var estadoRouter = require('./routes/estadoROUTE');




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/pacientes', pacienteRouter);
app.use('/api/alas', alaRouter);
app.use('/api/camas', camaRouter);
app.use('/api/estados', estadoRouter);




module.exports = app;

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
