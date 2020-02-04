const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/memes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
const MemeModel = require("./MemeModel/MemeModel")(mongoose);
db.on("error", console.error.bind(console, "MongoDB connection error:"));

MemeModel.create({ titulo: "Meme3" }, function(err, _instanciaCreada) {
  if (err) return handleError(err);
});
