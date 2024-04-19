import model from "./model.js";

export const findCourses = () => model.find();
export const findCoursebyId = (courseId) => model.find({ id: courseId });
export const updateCourse = (course_Id, course) => model.updateOne({ _id: course_Id }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const createCourse = (course) => {
  delete course._id;
  model.create(course);
};
