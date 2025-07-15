const mongoose = require ("mongoose");


function connectDB() {
    mongoose.connect("mongodb://localhost:27017/")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            throw Error(err);
        });
}

module.exports= connectDB;