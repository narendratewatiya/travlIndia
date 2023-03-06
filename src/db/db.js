const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://nc0961998:nikkiich@cluster0.gz6sfem.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});