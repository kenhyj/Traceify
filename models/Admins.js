const mongoose = require('mongoose');

const AdminsSchema = mongoose.Schema({
    email: {
        type: String,
    }
});

module.exports = mongoose.model('users', AdminsSchema);
