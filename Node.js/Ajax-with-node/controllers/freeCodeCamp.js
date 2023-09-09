const Swal = require('sweetalert2')
const path = require('path');
const parentDir = path.dirname(__dirname);

const getTest = (req, res) => {
  // console.log(req.body)

  if () {
    return res.send(expressSweetAlert())
  }
  res.send(`
    <h2>Hi mom</h2>
    <h3>awesome</h3>
    <style>
      body {background-color:#222}
      h2 {color: #007acc;
        font-size: 32px;
        text-align: center;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        background-color: #ccc;
        line-height: 200px;
        border-radius: 5px;
        user-select: none;
      }
    </style>
  `)
}
const postTest = async (req, res) => {
  console.log(req.body)
  if (req.body && req.body.msg == "hi mom") {
    //! the error 490 is because you didn't use return as John taught ya😲
    return res.json({msg: "I'm special Yo"})
  }
  res.json({msg: "I'm the res Yo"})
}


const sweetAlertGet = (req, res) => {
  res.status(200).sendFile(parentDir + '/public/complicated_e.gs/sweetalertfile.html');
}
const sweetAlertPost = async (req, res) => {
  // await 
};


module.exports = {
  getTest,
  postTest,

  sweetAlertGet,
  sweetAlertPost
}

/*
  req object in express contains:
  explained in 133 web-development book O'Reilly
  req.params
  req.query => route params
  req.body  => post content
  req.route  => for route debugging
  req.cookies/signedCookies => cookies by client
  req.headers => came with node as req.url
  req.accepts (types) => for public apis as MIME
  req.ip => ip address
  req.path without protocol, host, port, queryStr
  req.hostname => don't use it for sec purp
  req.xhr => true if req's ajax call 
  req.protocol => as /[https?]/
  req.secure => if https => true
  req.url/originalURL => path with queryStr but not including protocol, host, port
*/


//* -----------------------------------------------------------

/* This is what I built with replit and freeCodeCamp so far:
let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

app.use('/public', express.static(__dirname + '/public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    res.json({
      message: "Hello json".toUpperCase()
    });
  }

  res.json({
    message: "Hello json"
  });
})

app.get('/now', (req, res, next) => {
  // middleware
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
  let word = req.params.word;
  res.json({ echo: word })
})

const fAndlNames = (req, res) => {
  const { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
}
app.route('/name').get(fAndlNames).post(fAndlNames)


// window.location.href = encodeURI('https://boilerplate-express.bader-iddeenidd.repl.co/bader&yo')
module.exports = app;

*/