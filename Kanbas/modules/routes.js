//import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    await dao.updateModule(mid, module);
    res.sendStatus(204);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule);
    res.send(newModule);
  });

  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.getModulesForCourse(cid);
    res.send(modules);
  });
}
export default ModuleRoutes;
