import mongoose, { Model } from "mongoose";

const { DATABASE } = process.env || "mongodb+srv://SabeloX:HyO4kAJzDmdl8g8H@cluster0.izvrj.mongodb.net/charactersDB?retryWrites=true&w=majority";

export const connect = async () => {
    const connection = await mongoose.connect(DATABASE as string).catch(error => console.log(error));
    console.log("Connected to Database");

    const CharacterSchema = new mongoose.Schema({
        name: String,
        description: String,
        date: {
            type: Date,
            default: new Date()
        }
    });

    const Character = mongoose.models.Character || mongoose.model("Character", CharacterSchema);

    return { connection, Character }
}