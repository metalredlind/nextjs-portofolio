import mongoose from "mongoose";

export default async function connectToDB() {
    try {
        await mongoose.connect(
            ""
        );
        console.log("database connected succesfully");
    } catch (error) {
        console.log(error)
    }
}