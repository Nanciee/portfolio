var express = require('express');
var nodemailer = require('nodemailer');
var secret = require('./secret.js')

var app = express();

app.use(express.static(__dirname + '/../client'));
app.listen(8080);
console.log('Listening on port 8080!')

var router = express.Router();
app.use('/sayHello', router);
router.post('/', email);

function email(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: secret.user,
      pass: secret.pass
    }
  });

  var mailOptions = {
    from: 'nancyduyi@gmail.com', 
    to: 'nancyduyi@gmail.com', 
    subject: 'Hi Nancy',
    text: 'testing'
	};

	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
	});
}