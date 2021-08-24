const axios = require('axios');
const { favModel } = require('../model/FlowerModel');

const getAll = async (req, res) => {
    axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(data => {
        res.json(data.data.flowerslist)
    })
}

const getFav = async (req, res) => {
    const { email } = req.query
    // axios.get(`http://localhost:4040/all`)
    favModel.find({ x: email }, (err, flower) => {
        res.json(flower)
    })
}

deleteFav = async (req, res) => {
    // axios.get()
    favModel.deleteOne({ _id: req.params.fav_id }, (error, del) => {
        res.json(del)
    })
}

const updateFav = async (req, res) => {
    const { name,
        photo,
        instructions,
        email } = req.body

    favModel.findByIdAndUpdate({ _id: req.params.fav_id }, {
        name,
        photo,
        instructions,
        email
    }, { new: true }, (error, data) => {
        res.json(data)
    })


}

module.exports = {
    getAll,
    getFav,
    deleteFav,
    updateFav
}