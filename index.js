const express= require('express');
const app = express();

app.get('/',(req,res) => res.send('demo deploy'));

app.listen(3000)
console.log("Server on port", 3000)