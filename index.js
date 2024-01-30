require("dotenv").config();

const { ImagesService } = require("./services/Services");

const dayjs = require('dayjs')

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);
const imagesService = new ImagesService();

client.on('messageCreate', async(msg) => {
    const prefijoComando = '!';
    if (!msg.content.startsWith(prefijoComando)) return;

    switch (msg.content.toLowerCase()) {
        case '!hello':
            msg.reply(`Hello ${msg.author.username}, have a good day!`);
            break;
        case "!meme":
            msg.channel.send("Here's your meme!");
            const imgMeme = await imagesService.getMemes();
            msg.channel.send(imgMeme);
            break;
        case '!day':
            msg.reply(`Hello today is ${dayjs().format("DD-MMMM-YYYY")}`);
            break;
        default:
            msg.reply(`Sorry the command "${msg.content}" didn't exist.`)
    }
});