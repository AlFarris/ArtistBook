const { Aggregate } = require('mongoose');
const Art = require('../models/art.models')



module.exports.home = (req,res) => {
    res.json({message:"Hello"})
}

module.exports.createArt = (req,res) => {
    console.log('what is the body');
    Art.create(req.body)
        .then(art =>
            res.json(art))
        
        .catch((err) => 
            res.status(400).json({message: 'Something went wrong', error:err.errors})
        );
}
module.exports.ArtById = (req,res) => {
    Art.findOne({_id:req.params.id})
        .then((oneArt) => {
            res.json({art: oneArt})
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err.errors})
        });
}

module.exports.getArt = (req,res) => {
    Art.find({})
        .then((art) => {
            res.json(art);
        })
        .catch(err => {
            console.log(err)
            rres.status(400).json({message: 'Something went wrong', error:err.errors})
        })
}
module.exports.updateArt = (req,res) => {
    Art.updateOne({_id: req.params.id}, req.body,{new: true, runValidators: true})
        .then((art) => {
            res.json(art);
        })
        .catch((err)=>
            res.status(400).json({message: 'Something went wrong', error:err.errors}),
        );
}

module.exports.deleteArtById = (req,res) => {
    Art.deleteOne({_id: req.params.id})
        .then((result) => {
            res.json({result:result});
        })
        .catch((err)=>{
            res.json({message: 'Something went wrong', error:err})
        });
}