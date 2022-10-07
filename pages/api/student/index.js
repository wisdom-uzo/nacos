import Student from "../../../models/students";
import dbConnect from "../../../util/mongodb";

export default async (req, res) => {
	const { method } = req;

	// Connect to database
	await dbConnect();

	// Create task
	if (method === "POST") {
		try {
			const newStudent = await new Student(req.body).save();
			res
				.status(201)
				.json({ data: newStudent, message: "Task added successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}

	if (method === "GET") {
		try {
			const newStudent = await Student.find();
			res.status(200).json({ data: newStudent });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};
