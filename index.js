const express = require('express');
const app = express();
require('./db/mongoose')
const restRouter=require('./routers/restauarant.js')

// app.use(express.json);
app.use(restRouter);




const port = process.env.PORT || 3010;


app.listen(port, () => {
    console.log('Server is up on port ' + port);
})