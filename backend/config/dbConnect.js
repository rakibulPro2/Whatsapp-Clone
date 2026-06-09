const mongoose =  require("mongoose");

const connectDb =  async() =>{
    try {
        await(process.env.MONGO_URI ,{
            userNewUrlParser:true,
            useUnifiedTopology:true

        });
        console.log("Mongo Database connected successfully")
        
    } catch (error) {
        console.error("Eroor database connecting", error.message);
        process.exit(1);
    }

}

module.exports = connectDb;