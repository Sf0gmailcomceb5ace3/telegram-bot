const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5606598133:AAF-b2FavxCFeornEo3BOOO8g2Ao28FTJC4';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

console.log('run')
async function run_TelegramBot(){
    bot.onText(/\/start/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = "Hey I'm Sisula Welgamage's Telegrame bot"
        bot.sendMessage(chatId, resp);
      });

      bot.onText(/\/urladmin (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const film_msg = '📽️  Film Downloader - Sisula Welgamage 📽️\n\n\n' +
        '• TITLE : ' + match[1].split('@')[1] + '\n\n' +
        '• URL : https://sisula.ml'
        if (match[1] === '' || match[1] === ' ' || match[1]  === undefined || match === "undefined") return bot.sendMessage(chatId, '<tt> Enter Link Please </tt>');
        bot.sendMessage(chatId, '📽️ Downloading Your video...');
        bot.sendMessage(chatId, '📽️ Uploading Your video...');
        bot.sendVideo(msg.chat.id,match[1].split('@')[0] );
        
    });
}
run_TelegramBot()
