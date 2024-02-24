const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
    intents: Object.keys(GatewayIntentBits)
})
const { TelegramBot } = require("./Classes/Client");
const botClient = new TelegramBot('6680581282:AAEg0Olv6XvxcoO4S1ax787vj5ouH299s1PORN');
const cron = require("node-cron");

client.on('messageCreate', message => {
    const prefixes = ['.', '!'];
    if (message.author.bot) return;
    const prefixUsed = prefixes.find(prefix => message.content.startsWith(prefix));
    if (!prefixUsed) return;
    const command = message.content.slice(prefixUsed.length).trim().split(/ +/).shift().toLowerCase();
    if (command === 'telegramgönder') {
        const args = message.content.slice(prefixUsed.length).trim().split(/ +/).slice(1);
        if (!args.length) return message.reply(`Bir içerik belirtmelisin.`)
       
        const telegramMessage = args.join(' ');
        botClient.sendNotification(telegramMessage)
        message.reply('Mesajınız \`Telegram\` kanalına gönderildi!');

    }

});

/*
* HER GECE TELEGRAM KANALINA MESAJ GÖNDERİMİ ÖRNEĞİ
*/

client.on('ready', () => {
    cron.schedule('0 0 * * *', () => {
        botClient.sendNotification(`GECE GECE SANAL8 NE GİDERRRĞ`);
    }, {
        timezone: 'Europe/Istanbul' // Türkiye saati ile gece 00:00
    });
});

/*
* HAFTALIK MESAJ ÖRNEĞİ

client.on('ready', () => {
    // Her Pazartesi günü saat 12:00'da çalışacak cron job planı
    cron.schedule('0 12 * * 1', () => {
        botClient.sendNotification(`HAFTALIK MESAJ ÖRNEĞİ`);
    }, {
        timezone: 'Europe/Istanbul' // Türkiye saati
    });
});

*/
client.login(`MTIwNzA2MTY2NTk4MDYxNjc4NgPORN`).then(() => {
  botClient.sendNotification(`Discorda giriş yapıldı.`);
}).catch(() => {
    botClient.sendNotification(`Discorda giriş yapılamadı.`)
})
