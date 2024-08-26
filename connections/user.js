const mongoose = require('mongoose');

async function handleConnection(url) {
    try {
        await mongoose.connect(url);
        console.log('Connected successfully');
    } catch (error) {
        console.log('Error while connecting:', error.message);
    }
}

module.exports= {
    handleConnection
}