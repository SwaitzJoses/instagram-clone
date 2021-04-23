import mongoose from "mongoose" 


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true, 
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`INSTAGRAM:`.red) 
        console.log(`MongoDB Connected: ${conn.connection.host}`.yellow)          
    } 
    catch(error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}


export default connectDB