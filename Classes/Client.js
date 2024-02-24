const { Telegraf } = require('telegraf');

class TelegramBot {
    constructor(token) {
        this.bot = new Telegraf(token);
        this.chatId = '-1002082667452'
    }
    sendNotification(content) {
        this.bot.telegram.sendMessage(this.chatId, content).then(() => {
            console.log(`Telegram kanalına bir mesaj gönderildi içerik: ${content}`);
        }).catch(err => {
    console.log(`Telegram kanalına mesaj gönderilirken hata oluştu`, err);
        })
    }

}

module.exports = { TelegramBot }