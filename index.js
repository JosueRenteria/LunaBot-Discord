require("dotenv").config();

const commands = require("./commands/commands");

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

    const args = msg.content.slice(prefijoComando.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    commands[command](msg);
});