const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })

    // const criminalsRouter = require('./routes/criminals');
     const stateRouter = require('./routes/states');
    // const crimetypeRouter = require('./routes/crimetypes');
     const centralRouter = require('./routes/central');
     const requestsRouter = require('./routes/requests');
     const contractorRouter = require('./routes/contractor');
     const projectRouter = require('./routes/project');
    
    //  const categoryRouter = require('./routes/central');
    // app.use('/criminals', criminalsRouter);
    app.use('/states', stateRouter);
    // app.use('/crimetypes', crimetypeRouter);
     app.use('/central', centralRouter);
    app.use('/requests',requestsRouter);
    app.use('/contractor',contractorRouter);
    app.use('/project',projectRouter)
        
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});