const {Router}=require("express");
const doctorRoute=Router()
const {auth}=require("../middlewares/auth.middleware")
const {verifyrole}=require("../middlewares/verifyrole.middleware");
const {addDoctor,editDoctor,deleteDoctor,getDoctor}=require("../controllers/doctor.controller")

doctorRoute.post("/appointments",auth,verifyrole(["User"]),addDoctor)
doctorRoute.put("/appointments/:id",editDoctor)
doctorRoute.delete("/appointments/:id",auth,verifyrole(["User"]),deleteDoctor)
doctorRoute.get("/appointments",auth,getDoctor)


module.exports={doctorRoute}