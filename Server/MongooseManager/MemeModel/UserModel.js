function UserModel(mongoose) {
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  const MemeSchema = new Schema({
    meme_id: ObjectId,
    titulo: String,
    descripcion: { type: String, default: "Sin descripcion" },
    fecha_subida: { type: Date, default: Date.now },
    keywords: { type: [String], default: ["random"] }
  });
  return mongoose.model("meme", MemeSchema);
}
module.exports = UserModel;
/*
MemeModel.create({ titulo: "Meme1" }, function(err, awesome_instance) {
  if (err) return handleError(err);
});
*/
