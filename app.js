require("console-png").attachTo(console);
const venom = require("venom-bot");

//Import feature funtions
const Uselessfacts = require("./features/Uselessfacts");
const DefaultMessage = require("./features/DefaultMessage");
const Info = require("./features/Wiki");
const Info_Long = require("./features/Wiki_Long");

//////////////////////////////////////////////////////////
///////////////////// CREATE SESSION /////////////////////

venom
  .create({
    session: "Production" //name of session
  },
  (base64Qrimg, asciiQR, attempts, urlCode) => {
    console.log('Number of attempts to read the qrcode: ', attempts);
    console.log('Terminal qrcode: ', asciiQR);
    console.log('base64 image string qrcode: ', base64Qrimg);
    console.log('urlCode (data-ref): ', urlCode);
  })
  .then(client => start(client))
  .catch(erro => {
    console.log(erro);
  });

////////////////////////////////////////////////////
/////////////// START CHATTING ////////////////////

async function start(client) {
  client.onMessage(async message => {
    let text = message.body;
    let keyword = text.toLowerCase().split(";")[0];

    //console.log(message)

    if (message.isGroupMsg === false ) {
      switch (keyword) {
        case "uselessfact":
          let uselessfact = await Uselessfacts();
          client.sendText(message.from, uselessfact);
          break;

        case "info":
          let info_res = await Info(text.split(";")[1]);
          client.sendText(message.from, info_res);
          break;

        case "info-long":
          let ino_long_res = await Info_Long(text.split(";")[1]);
          client.sendText(message.from, ino_long_res);
          break;

        default:
          client.sendText(message.from, DefaultMessage);
          break;
      }
    }
  });
}
