import model from "./model.js";

export const getModulesForCourse = (course) => model.find({ course: course });
export const createModule = (module) => {
  delete module._id;
  model.create(module);
};
export const updateModule = (id, module) => model.updateOne({ _id: id }, { $set: module });
export const deleteModule = (id) => model.deleteOne({ _id: id });
