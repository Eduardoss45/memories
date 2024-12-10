const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@cluster0-shard-00-00.qbiqh.mongodb.net:27017,cluster0-shard-00-01.qbiqh.mongodb.net:27017,cluster0-shard-00-02.qbiqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-10n4ir-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;
