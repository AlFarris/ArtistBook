const ArtController = require('../controllers/art.controllers');

module.exports = (app)=>{

    app.get('/api',ArtController.home);
    app.post('/api/art', ArtController.createArt);
    app.get('/api/getAllArt',ArtController.getArt);
    app.get('/api/getArtById/:id',ArtController.ArtById);
    app.put('/api/updateArtById/:id',ArtController.updateArt);
    app.delete('/api/deleteArtById/:id',ArtController.deleteArtById);
};