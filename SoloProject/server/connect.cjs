const { MongoClient } = require('mongodb');
require('dotenv').config({path: './config.env'})

async function main() {
  const Db = process.env.ATLAS_URI;
  console.log('ATLAS URI', Db)
  const client = new MongoClient(Db);

  try {
    await client.connect();
    const collections = await client.db('couchpotato').collections();
    collections.forEach((collection) => console.log(collection.s.namespace.collection));
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
  
}

main();