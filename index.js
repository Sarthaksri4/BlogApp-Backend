const express = require('express');
const app = express();

app.listen(3001,()=>{
    console.log("App is running successfully");
})

// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})
