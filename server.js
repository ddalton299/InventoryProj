express = require('express'); 
mongoose = require('mongoose'); 
body_Parser = require('body-parser'); 
const port = 3000; 
const uri = 'mongodb+srv://D3nz3lDalt0n:Themetalbat99!@cluster0.vg0qq.mongodb.net/InventoryTracker?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,  
    useUnifiedTopology: true
}) 
.then(() => {
    console.log("Connected"); 
})
.catch(err=> console.log(err));  

app = express(); 

app.get('/', (q, s) => {
    s.send('Hello World!'); 
}); 

app.listen(port, () =>{
    console.log(`app listening at http://localhost:${port}`); 
}); 

