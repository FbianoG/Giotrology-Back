const mongoose = require('mongoose')
require('dotenv').config()

async function ConnectDataBase() {
    try {
        await mongoose.connect(process.env.URL_DATABASE)
        console.log("DataBase conected!");
    } catch (error) {
        console.log("Erro ao se conectar ao DataBase", error);
    }
}

module.exports = { ConnectDataBase }