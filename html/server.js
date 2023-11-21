const express = require('express');
const app = express();

app.use('/assets', express.static('assets',{
    etag: false,
    maxAge: '5h',
}));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    /* res.sendFile('index.html', {
        root: __dirname
    }); */
    res.render('index');
    //res.send(__dirname);
});



app.listen(3000);