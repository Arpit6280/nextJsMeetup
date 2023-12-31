// /api/new-meetup
//POST /api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://arpitsinghyadav19:Arpit6280@cluster0.ukwpzd9.mongodb.net/test?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup Inserted" });
    } catch (e) {
      console.log(e);
    }
  }
}

export default handler;
