var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})

