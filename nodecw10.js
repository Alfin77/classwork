const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "mashupDB";

const leads = [
  { name: "Arjun", city: "Kannur" },
  { name: "Meera", city: "Kochi" },
  { name: "Lakshmi", city: "Calicut" }
];

MongoClient.connect(url)
  .then(client => {
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("leads");

    return collection.insertMany(leads)
      .then(() => {
        console.log("Leads inserted");

        return collection.findOne(
          { city: "Kochi" },
          { projection: { _id: 0, name: 1, city: 1 } }
        );
      })
      .then(result => {
        console.log("First lead from Kochi:", result);
        client.close();
        console.log("Connection closed");
      });
  })
  .catch(err => {
    console.error("Error:", err);
  });