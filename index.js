const express = require("express");
const app = express();
const port = process.env.PORT || 4500 ; 



//middle wares

app.use(express.json());
app.use(require("./routes/api"))





app.listen(port, () =>{
    console.log(`listening at ${port}`);
});