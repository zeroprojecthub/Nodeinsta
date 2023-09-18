const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    res.send("You are at Home");
});

app.get("/ig/:user", (req, res) => {

    let { user } = req.params;

    let data = require("./data.json");
    let instadata = data[user];
    
    console.log(instadata);
    res.render("instagram.ejs", { instadata });

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});