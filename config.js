const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "K7YTkLSQ#1-H17-ypfzr991W8A4Zyg5vTzel0QnraYyaSuYdzGrc",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",    

}
