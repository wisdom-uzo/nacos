import mongoose from "mongoose";

const student = new mongoose.Schema({
	firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    LastName: { type: String, required: true },
    uuid: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

export default mongoose.models.Student || mongoose.model("Student", student);
