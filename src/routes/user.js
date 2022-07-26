import {Post} from "../model/dto/dbModelDto.js";
import PostService from "../microServices/PostServices.js";

export const routes=[
    {
        method:"POST",
        url:"/api/user/createPost",
        handler:PostService.addPost,
        schema:{
            body:{
                type:'object',
                required:['name','title','author','content'],
                properties:{
                    name:{type:"string"},
                    title:{type:"string"},
                    description:{type:"string"},
                    content:{type:"string"},
                    category:{type:"array",items:{type:"string"}},
                    author:{type:"string"},
                    createdDate:{type:"string"},
                    lastUpdate:{type:"string"},
                }
            },
            response:{
                200:{
                    type:'object',
                    Properties:{
                        hello:{type:'string'}
                    }
                }
            }
        }
    },
    {
        method:"POST",
        url:"/api/user/findPost",
        handler:PostService.findPost,
        schema:{
            body:{
                type:'object',
                required:[],
                properties:{
                    details:{type:"object",items:{type:"string"}}
                }
            },
            response:{
                200:{
                    type:'object',
                    Properties:{
                        hello:{type:'string'}
                    }
                }
            }
        }

    }
]

export default{routes}