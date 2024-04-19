import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: String },
    endDate: { type: String },
    department: { type: String },
    credits: { type: String },
    description: { type: String },
  },
  { collection: "courses" }
);
export default courseSchema;
