import mongoose from "mongoose"


const connectDb = async ()=>{
    try {;
        await mongoose.connect("mongodb://localhost:27017/techsensedb");
        console.log("Mongodb connected");
    } catch (error) {
        console.log("error in connection");
        process.exit(1);
    }
}
export default connectDb;