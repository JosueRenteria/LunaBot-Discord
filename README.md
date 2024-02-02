<!--Logo and Name of the proyect-->
<h1 align="center">
  <!--<br><a href="https://github.com/JosueRenteria/LunaBot-Discord"><img src="" alt="Luna Bot (Discord)" width="200"></a><br>-->
  Luna Bot<br>
</h1>


<!--Description of Luna-->
<h4 align="center">Luna Bot is a project of a Bot for discord, with different commands.</h4>

<!--Diferents tecnologis that need the proyect-->
<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify"> <img src="https://badge.fury.io/js/electron-markdownify.svg" alt="Gitter"> </a>
</p>

<!--Links-->
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> 
  <!--•
  <a href="#related">Related</a> •
  <a href="#license">License</a>-->
</p>

<!--Keys Feautures and Comands-->
## Key Features
* Discord Channels with Different Commands.
* Send messages depending on different commands.
* Sending different images.
* Current Day Shipping.

<!--List Comands-->
### Comands 
<table>
    <!--Headlines-->
    <tr>
      <th>Commands</th>
      <th>Description</th>
      <th>Exit Message</th>
    </tr>
    <!--Comand !hello-->
    <tr>
      <td>!hello</td>
      <td>Say hello and answer with my name</td>
      <td>Hello [author_username]</td>
    </tr>
    <!--Comand !meme-->
      <tr>
        <td>!meme</td>
        <td>Send a random meme as a message</td>
        <td>Here's your meme! [image_meme]</td>
      </tr>
    <!--Comand !day-->
        <tr>
          <td>!day</td>
          <td>Send the current day</td>
          <td>Hello today is [day_format_of_today]</td>
        </tr>
</table>

<!--Guide to using the Bot-->
## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JosueRenteria/LunaBot-Discord.git

# Go into the repository
$ cd LunaBot-Discord

# Install dependencies
$ npm install

# Run the app
$ node index.js
```
> **Note:**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

> **Note:**
> If you don't already have a Bot on Discord, please [see this page](https://buddy.works/tutorials/how-to-build-a-discord-bot-in-node-js-for-beginners#part-1-discord-configuration) to see the Bot settings on Discord.

### Tokens Configurations

To be able to use the code, you need to add the Tokens, the Token of the discord server channels and the bot key. These are added in a folder that has to be created with the name `.env`. These are added to the file as follows:

```bash
CLIENT_TOKEN = 'YOUR_CLIENT_TOKEN'

CHANNEL1_TOKE = 'TOKEN_CHANNEL'
CHANNEL2_TOKE = 'TOKEN_CHANNEL'
```

<!--Latest Version-->
## Download
You can [download](https://github.com/JosueRenteria/LunaBot-Discord/releases/tag/v.3.0.0) the latest installable version of tht Luna Bot for Windows, macOS and Linux.

<!--Credits-->
## Credits
This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Discord.js](https://www.npmjs.com/package/discord.js/v/13.0.0-dev.fdad14099779e61cb84dcd1cb2497e0e853a6144)
- [Axios.js](https://axios-http.com/docs/intro)
- [Day.js](https://day.js.org/en/)
