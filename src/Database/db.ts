import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema ({
    username: {type: String, unique: true },
    password: String
})

export const userModel =  model("User", userSchema );

const contentSchema = new Schema ({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User"}
});

export const contentModel = model("Content", contentSchema);