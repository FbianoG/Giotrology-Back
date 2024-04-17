const mongoose = require('mongoose')

const url = "mongodb+srv://giovanna:giovanna123@cluster0.cvtowhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function ConnectDataBase() {
    try {
        await mongoose.connect(url)
        console.log("DataBase conected!");
    } catch (error) {
        console.log("Erro ao se conectar ao DataBase", error);
    }
}

module.exports = { ConnectDataBase }