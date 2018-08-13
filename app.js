var express = require('express');
var multer  = require('multer');

var upload = multer({ dest: 'uploads/' });

var app = express();

//Set static path
app.use(express.static(__dirname + '/public'));

//view engine
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.post('/addfile', multer().single('inputfile'), function (req, res, next) {

    var files = req.file;

    var data = { 
        name: files.originalname,
        size: files.size + ' bytes'
    }

    res.send(data);
    console.log('here is the file:', files);

})


app.listen(process.env.PORT || 3000, function(){
      console.log("Server running on port 3000");
});
