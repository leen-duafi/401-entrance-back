const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
    name: { type: String },
    photo: { type: String },
    instructions: { type: String },
    email: { type: String }
})

const favModel = mongoose.model('fav', favSchema)

const seedFavCollection = () => {
    const favOne = new favModel({
        name: "sun flower",
        photo: "https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/sunflower-1627193_1920.jpg?itok=z0U222mG",
        instructions: " keep your face toward the sun ",
        email: "leen.hiccup.471998@gmail.com"
    })

    const favTwo = new favModel({
        name: "rose",
        photo: "https://www.compo.com/.imaging/focus/dam/global/articles/garden/rose-types_rosen-arten_3.jpg/jcr:content.jpeg?lastModified=Wed+Sep+09+10%3A15%3A53+CEST+2020",
        instructions: "give it water ",
        email: "leen.hiccup.471998@gmail.com"
    })

    favOne.save();
    favTwo.save()
}


module.exports = {
    favModel,
    seedFavCollection
}