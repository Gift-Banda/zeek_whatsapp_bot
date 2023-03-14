require('console-png').attachTo(console);
const venom = require("venom-bot");


//Import feature funtions
const Uselessfacts = require("./features/Uselessfacts");
const DefaultMessage = require("./features/DefaultMessage");
const Info = require("./features/Wiki");



//////////////////////////////////////////////////////////
///////////////////// CREATE SESSION /////////////////////

venom
  .create(
    'sessionName',
    (base64Qr, asciiQR, attempts, urlCode) => {
      //console.log(asciiQR); // Optional to log the QR in the terminal
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], 'base64');

      var imageBuffer = response;
      require('fs').writeFile(
        'out.png',
        imageBuffer['data'],
        'binary',
        function (err) {
          if (err != null) {
            console.log(err);
          }
          else{
            // show pic in console
            var image = require('fs').readFileSync(__dirname + '/out.png');
            console.png(image);
          }
        }
      );
    },
    undefined,
    { logQR: false }
  )
  .then((client) => {
    start(client);
  })
  .catch((erro) => {
    console.log(erro);
  });




  ////////////////////////////////////////////////////
  /////////////// START CHATTING ////////////////////

async function start(client) {
  client.onMessage(async message => {
    let text = message.body;
    let keyword = text.toLowerCase().split(";")[0];

    if (message.isGroupMsg === false) {
      switch (keyword) {
        case "uselessfact":
          let uselessfact = await Uselessfacts();
          client.sendText(message.from, uselessfact);
          break;

        case "info":
          let res = await Info(text.split(';')[1]);
          client.sendText(message.from, res);
          break;

        default:
          client.sendText(message.from, DefaultMessage);
          break;
      }
    }
  });
}

/*
client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
*/
