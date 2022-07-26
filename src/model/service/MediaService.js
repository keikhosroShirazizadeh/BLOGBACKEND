
import { MongoClient } from "../../../index.js";
const createorUpdateCollection=async ()=>{

    try {
        let resp=await MongoClient.db("MongoBlog").createCollection("Media")
        console.log(" media collection created succcessfully")
    }catch(err){
        console.log(err)
    }
}

const addMedia=async(media)=>{
    try{
        let resp=await MongoClient.db("MongoBlog").collection("media").insertOne(media)
        console.log("media inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }
}

const addManymedia=async(ArrayOfMedias)=>{
    try{
        let resp=await MongoClient.db("MongoBlog").collection("media").insertMany(ArrayOfMedias)
        console.log("arrya of medias inserted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }
}
const findmediaByName=async(name)=>{
    try{
        let resp=await MongoClient.db("MongoBlog").collection("media").findOne({name:name})
        console.log("media found ",resp)
    }catch (err){
        cossole.log(err)
    }
}

const deletemediaByName=async(name)=>{
    try{
        let resp=await MongoClient.db("MongoBlog").collection("media").deleteOne({name:name})
        console.log("media found and deleted successfully ",resp)
    }catch (err){
        cossole.log(err)
    }
}
const updatemedia=async(media)=>{
    try{
        let resp=await MongoClient.db("MongoBlog").collection("media").findOne({name:media.name},{$set:media})
        console.log("media found and updated successfully",resp)
    }catch (err){
        cossole.log(err)
    }
}
export default{addMedia,addManymedia,updatemedia,deletemediaByName,findmediaByName}