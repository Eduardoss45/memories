const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ac-c0pfbt6-shard-00-00.xlmhjcx.mongodb.net:27017,ac-c0pfbt6-shard-00-01.xlmhjcx.mongodb.net:27017,ac-c0pfbt6-shard-00-02.xlmhjcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-xw5ill-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;
