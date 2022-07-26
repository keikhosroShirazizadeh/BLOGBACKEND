import {MongoClient} from "mongodb";

const uri="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
export const initMongodbConnection=async ()=>{
    return await MongoClient.connect(uri)
}