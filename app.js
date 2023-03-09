const venom = require("venom-bot");

//Import feature funtions
const Uselessfacts = require("./features/Uselessfacts");
const DefaultMessage = require("./features/DefaultMessage");
const Info = require("./features/Wiki");

venom
  .create({
    session: "Main-Session", //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then(client => start(client))
  .catch(erro => {
    console.log(erro);
  });

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
