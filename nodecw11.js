const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Mash-updb");
    const collection = db.collection("registrations");

    const sampleRegistrations = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
      { name: 'Dean', city: 'Calicut' }
    ];

    return collection.deleteMany({})
      .then(() => collection.insertMany(sampleRegistrations))
      .then(() => {
        console.log("Participants inserted");

        return collection.updateOne(
          { name: "John" },
          { $set: { name: "Johnny", city: "Chennai" } }
        );
      })
      .then(() => {
        console.log("John updated");

        return collection.updateMany(
          { name: "Dean" },
          { $set: { city: "Kollam" } }
        );
      })
      .then(() => {
        console.log("Dean updated");

        return collection.deleteOne({ name: "Deepak" });
      })
      .then(() => {
        console.log("Deepak deleted");

        return collection.deleteMany({ name: { $regex: "^D" } });
      })
      .then(() => {
        console.log("Names starting with D deleted");

        return collection.find({}).toArray();
      })
      .then(result => {
        console.log("Final Data:");
        console.table(result);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });