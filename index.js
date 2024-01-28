require("dotenv").config();

const axios = require('axios');
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

client.on('messageCreate', async(msg) => {
    const prefijoComando = '!';
    if (!msg.content.startsWith(prefijoComando)) return;

    switch (msg.content.toLowerCase()) {
        case '!hello':
            msg.reply(`Hello ${msg.author.username}, have a good day!`);
            break;
        case "!meme":
            msg.channel.send("Here's your meme!");
            const imgMeme = await getMeme();
            msg.channel.send(imgMeme);
            break;
        default:
            msg.reply(`Sorry the command "${msg.content}" didn't exist.`)
    }
});

async function getMeme() {
    try {
        const response = await axios.get("https://meme-api.com/gimme");
        return response.data.url;
    } catch (error) {
        console.error('Error al obtener el meme:', error.message);
        throw error;
    }
}