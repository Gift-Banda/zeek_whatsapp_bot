const venom = require('venom-bot');

//Import feature funtions
const Uselessfacts = require('./features/Uselessfacts')
const DefaultMessage = require('./features/DefaultMessage')
const Dictionary = require('./features/Dictionary')

venom
  .create({
    session: 'Main-Session', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async(message) => {
      let text = message.body
      let keyword = text.toLowerCase().split(' ')[0]
    if (message.isGroupMsg === false) {
      switch (keyword) {
          case "uselessfact":
          let uselessfact =  await Uselessfacts()
              client.sendText(message.from, uselessfact)
              break;
          
          case "dict":
          let word = text.splice()[0,1]
          let meaning =  await Dictionary(word)
          console.log(meaning)
              //client.sendText(message.from, meaning)
              break;
      
          default:
            client.sendText(message.from,DefaultMessage)
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