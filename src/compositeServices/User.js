import PostService from "../model/service/PostService.js";
import {Post} from "../model/dto/dbModelDto.js";
const createPost=async(req,reply)=>{
    console.log("create apost is called")
    const post=new Post(req.body.name,
        req.body.category,
        req.body.description,
        req.body.content,
        req.body.author,
        req.body.createdDate,
        reques.body.lastUpdate
        )
    try {
        let resp= await PostService.addPost(post)
        reply.send("inseted")

    }catch (err){
        console.log(err)
    }

}

const updatePost=async(req,reply)=>{    
    const 

}

export default{createPost}