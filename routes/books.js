const express = require("express");
const router = express.Router();


router.get('/get',(req,res) => {
    console.loh("hello from get req");

    res.send("Hello from get request")

});

router.post("/post", (req, res) => {
    console.log("hello from post req");

    res.send("Hello from post request");
});

module.export= router