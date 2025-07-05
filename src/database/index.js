import mongoose from "mongoose";

export default async function connectToDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://monelredlind:Yesmylord1994@cluster0.kye1ag5.mongodb.net/"
        );
        console.log("database connected succesfully");
    } catch (error) {
        console.log(error)
    }
}