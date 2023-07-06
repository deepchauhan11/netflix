import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@netflix-clone.bhhske3.mongodb.net/NETFLIX-CLONE?retryWrites=true&w=majority`

const Connection = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected Successfully")
    } catch (err) {
        console.log(err, "Error while connecting to database")
    }
}

export default Connection;