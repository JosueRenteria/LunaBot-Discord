module.exports = {
    general: {
        token: process.env.CHANNEL1_TOKE,
        allowedCommands: ["hello", "day", "dog", "fox"]
    },
    memes: {
        token: process.env.CHANNEL2_TOKE,
        allowedCommands: ["meme"]
    }
};