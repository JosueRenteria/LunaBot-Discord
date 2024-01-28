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

    const prefijoComando = '!'; // Puedes ajustar esto según tu preferencia
    if (!msg.content.startsWith(prefijoComando)) return;

    // You can view the msg object here with console.log(msg)
    if (msg.content === '!Hello') {
        msg.reply(`Hello ${msg.author.username}`);
    }
});