const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}));
require('./routes/art.routes')(app);
require('./config/mongoose.config'); 
app.listen(PORT, ()=> {
    console.log(`server is listening on PORT ${PORT}`);
});
