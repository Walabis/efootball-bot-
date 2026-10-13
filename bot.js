const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { args: ['--no-sandbox','--disable-setuid-sandbox'] }
});
const commands = {
  "menu": "⚽ eFOOTBALL 200 BOT\n1. formation\n2. mbappe\n3. haaland\n4. messi\n5. ronaldo\n6. top cf\n7. top gk\n8. tricks\n9. how to score\n10. how to defend\n11. coins\n12. buy coins\n13. cheap beast\n14. squad",
  "formation": "META: 4-2-1-3 Quick Counter BEST",
  "best formation": "4-2-1-3 QC: 2 DMF Anchor Deep Line, 1 AMF Hole Player",
  "4-2-1-3": "4-2-1-3 QC BEST - 2 DMF, 1 AMF, 3 CF",
  "3-2-2-3": "3-2-2-3 ATTACK - 3 CB, 2 DMF, 2 AMF, 3 CF",
  "mbappe": "Mbappe 104: Speed 99, Finishing 96 - Best CF - Double Touch",
  "haaland": "Haaland 103: Finishing 98, Heading 96",
  "messi": "Messi 102: Dribbling 99, Passing 97 - Best AMF",
  "ronaldo": "Ronaldo 101: Jumping 99, Finishing 96",
  "top cf": "TOP CF: Mbappe 104, Haaland 103, Etoo 102, Rummenigge 102",
  "top gk": "TOP GK: Cech 101, Kahn 101, Courtois 101",
  "tricks": "Double Touch, Sole Control, Elastico, Flip Flap",
  "how to score": "Inside box: NO SPRINT. Double Touch + Finesse Shot (R2+Square)",
  "how to defend": "Use DMF not CB. Hold X, L2 jockey, Square second press",
  "coins": "Free: 300 per month from events Thursday",
  "buy coins": "Till 123456: 550=700KES 1040=1300KES Send M-Pesa screenshot",
  "squad": "BEST: Cech, Van Dijk, Maldini, Theo, Cafu, Vieira, Rodri, Messi, Mbappe, Haaland",
  "cheap beast": "GP BEASTS: Alvarez 96, Lautaro 96, Saka 96, Saliba 96, Valverde 96"
};
client.on('qr', qr => { qrcode.generate(qr, {small:true}); console.log(qr); });
client.on('ready', () => console.log('Ready'));
client.on('message', async msg => {
  const t = msg.body.toLowerCase().trim();
  if(commands[t]) msg.reply(commands[t]);
});
client.initialize();
