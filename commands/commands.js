const ImagesService = require("./services");
const dayjs = require('dayjs')

const imagesService = new ImagesService();

const helloCommand = (msg) => {
    msg.reply(`Hello ${msg.author.username}, have a good day!`);
};

const memeCommand = async(msg) => {
    msg.channel.send("Here's your meme!");
    const imgMeme = await imagesService.getMemes();
    msg.channel.send(imgMeme);
}

const dayCommand = (msg) => {
    msg.reply(`Hello today is ${dayjs().format("DD-MMMM-YYYY")}`);
}

module.exports = {
    hello: helloCommand,
    meme: memeCommand,
    day: dayCommand,
};