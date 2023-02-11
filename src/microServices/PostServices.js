import { Post } from "../model/dto/dbModelDto.js"
import PostService from "../model/service/PostService.js"
export const addPost=async(req,reply)=>{
    console.log("create apost is called")
    const post=new Post(req.body.name,req.body.title,
        req.body.category,
        req.body.description,
        req.body.content,
        req.body.author,
        req.body.createdDate,
        req.body.lastUpdate
    )
    try {
        let checkPostTitle=await PostService.findPostByDetails({title:post.title})
        if(checkPostTitle){
            throw new Error("post with this title is created before")
        }   
        let resp= await PostService.addPost(post)
        reply.send(JSON.stringify({message:"data inserted successfully"}))

    }catch (err){
        console.log(err)
    }

}
export const findPost=async(req,reply)=>{
    let details=req.body.details
    console.log(details);
    let post=await PostService.findPostByDetails(details)
    console.log("found post",post);
    reply.send(JSON.stringify(post))
}

export default{addPost,findPost}