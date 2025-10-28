import mongoose from "mongoose";

export async function dbConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todos_app');
        console.log('DB Connected');
    } catch (error) {
        console.log('Error in dbConnection: ', error);
        process.exit(1);
    }
}