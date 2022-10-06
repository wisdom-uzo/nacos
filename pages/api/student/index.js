import { Timestamp } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler (req, res){
    const {method, body} = req

    const {db} = await connectToDatabase();

    if(method === "GET") {
        try {
            const student = await db
            .collection("student")
            .find()
            .sort({timestamp: -1})
            .toArray()
            res.status(200).json(student)
        } catch (error){
            res.status(500).json(error)
        }
    }

    if(method === "POST") {
        try {
           const student = await db.collection("student")
           .insertOne({...body, timestamp: new Timestamp()})
           res.status(201).json(student)
        } catch (error){
            res.status(500).json(error)
        }
    }

    
    
}