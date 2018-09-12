'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 6969
app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
} );
