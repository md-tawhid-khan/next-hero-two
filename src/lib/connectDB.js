const { MongoClient, ServerApiVersion } = require("mongodb");

let client;

let db;

const connectDB=async()=>{
    if(db) return db ;
    try{
        const uri=process.env.NEXT_PUBLIC_MONGODB_URL
         client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db= await client.db('next-hero')
        
      return db   
    }
    catch(error){
        console.log(error);
        throw new Error("Database connection failed");
    }
}
export default connectDB