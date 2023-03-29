import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' }
}, {
    timestamps: true,
    versionKey: false,
}
)

const TODOMODEL = mongoose.model("todo", todoSchema);

export default TODOMODEL;