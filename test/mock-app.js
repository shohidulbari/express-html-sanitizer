const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const sanitizer = require('../index');

app.use(BodyParser.json());

const config = {
    allowedTags: [],
    allowedAttributes:{},
    allowedIframeHostnames: []
}

app.use(sanitizer(config));

app.post("/post", (req, res, next) => {
    res.status(200).send({
        data : req.body
    })
})

app.listen(9090, () => {
    console.log(`Express test server started running at port ${9090}`);
})

module.exports = app;