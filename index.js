require("dotenv").config();

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

client.on('messageCreate', msg => {

    const prefijoComando = '!';
    if (!msg.content.startsWith(prefijoComando)) return;

    switch (msg.content.toLowerCase()) {
        case '!hello':
            msg.reply(`Hello ${msg.author.username}, have a good day!`);
            break;
        default:
            msg.reply(`Sorry the command "${msg.content}" didn't exist.`)
    }
});