const { DoctorModel} = require("../models/doctor.model");


// Add Doctor
const addDoctor = async (req, res) => {
  const {name,image,specialization,experience,location,date,slots,fee}= req.body;
  try {
    const doctor = new DoctorModel({name,image,specialization,experience,location,date,slots,fee});
    await doctor.save();
    res.status(200).send({ success: true, message: "Doctor is added" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//editDoctor
const editDoctor = async (req, res) => {
  const doctorId = req.params.id;
  const updatedDoctorData = req.body;
  console.log(updatedDoctorData)
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(doctorId, updatedDoctorData, {
        new: true,
      })
      res.status(200).send({ success: true, message: "Doctor is edit",doctor });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//delete Doctor
const deleteDoctor = async (req, res) => {
    const doctorId = req.params.id;
  try {
    let loki=await DoctorModel.findByIdAndDelete(doctorId)
    res.status(200).send({ success: true, message: "Doctor is Delete" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Get Doctor
const getDoctor = async (req, res) => {
  let{name,specialization,sortByDate}=req.query;

  try {
    name=new RegExp(name,'i');
    specialization=new RegExp(specialization,'i')
    
    if(sortByDate==='asc'){
      sortByDate=1;
    }else if(sortByDate==='desc'){
      sortByDate=-1
    }

    if(sortByDate){
      data=await DoctorModel.find({name,specialization}).sort({date:sortByDate})
    }else{
      data=await DoctorModel.find({name,specialization})
    }

    res.status(200).send({ success: true,data:data,message:"All Doctor data successfully fetched"});

} catch (error) {
    res.status(400).send({ error: error.message });
}
};

module.exports = { addDoctor, editDoctor, deleteDoctor, getDoctor };
