const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");
const { getAll, getFav, deleteFav , updateFav } = require('./controller/Controll')
const { seedFavCollection } = require('./model/FlowerModel')
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://exam-train:1234@cluster0-shard-00-00.bym2c.mongodb.net:27017,cluster0-shard-00-01.bym2c.mongodb.net:27017,cluster0-shard-00-02.bym2c.mongodb.net:27017/401?ssl=true&replicaSet=atlas-c1spqs-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true });

// seedFavCollection();
app.get('/', (req, res) => { res.send(' Hello World 👋') })
app.get('/all', getAll)
app.get('/fav', getFav)
app.delete(`/fav/:fav_id`, deleteFav)
app.put('/fav/:fav_id', updateFav)
app.listen(4040, () => {
    console.log(`you are listing to ${4040}`);
})