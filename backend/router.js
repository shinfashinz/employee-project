import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addtask").post(controller.addTask);
router.route("/gettask").get(controller.getTask);
router.route("/deltask/:id").delete(controller.delTask);
router.route("/getDetails/:id").post(controller.getfullData)    
router.route("/deletemp/:id").delete(controller.delEmployee) 
router.route("/editEmp/:id").patch(controller.editEmployee) 
export default router;