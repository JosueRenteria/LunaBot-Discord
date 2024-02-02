const ImagesService = require("../services/Services");
const dayjs = require('dayjs')

const imagesService = new ImagesService();

const helloCommand = (msg) => {
    msg.reply(`Hello ${msg.author.username}, have a good day!`);
};

const memeCommand = async(msg) => {
    const imagesService = new ImagesService();
    msg.channel.send("Here's your meme!");

    try {
        const imgMeme = await imagesService.getMemes();
        msg.channel.send(imgMeme);
    } catch (error) {
        console.error('Error al obtener los memes:', error.message);
        throw error;
    }
}

const dayCommand = (msg) => {
    msg.reply(`Hello today is ${dayjs().format("DD-MMMM-YYYY")}`);
}

module.exports = {
    hello: helloCommand,
    meme: memeCommand,
    day: dayCommand,
};