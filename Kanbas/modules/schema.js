import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  module: { type: String, required: true },
});

const moduleSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    course: { type: String, required: true },
    lessons: { type: [lessonSchema] },
  },
  { collection: "modules" }
);
export default moduleSchema;
