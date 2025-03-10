const express = require('express');
const app = express();
const port = 3000;

// home page
app.get('/', (req,res) => {
    res.send('Hello, World!');
});

//start server
app.listen(port, () =>{
    console.log(`Express is working! Nadine R. Lopez`)
})