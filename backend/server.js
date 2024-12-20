const express = require('express');
const ethersMiddleware = require('../backend/contractmiddleware/contractmiddleware');
const routes = require('../routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(ethersMiddleware);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});