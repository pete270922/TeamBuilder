const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

//Define middleware for server
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Server up static assets (usually on heroku)
if  (process.env.NODE_ENV === "development") {
    app.use(express.static("client-team_builder/build"));
}

//Define API routes here 
//Send every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, ".client-team_builder/public/index.html"));

});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})