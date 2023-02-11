
import fastify from "fastify";
import {routes} from "./src/routes/user.js"
import fastifySwagger from "fastify-swagger";
import {swaggerOptions} from "./src/consfiguration/swagger.js"
import { initMongodbConnection } from "./src/initailization/initMonogdb.js";
export const MongoClient=await initMongodbConnection()
const app=fastify({
    logger:{
        disableRequestLogging:true
    }
})  
app.addHook('onRequest',(req,reply,done)=>{
    req.log.info({
        url:req.raw.url,id:req.id},'recieved request')
        done()

})
app.register(fastifySwagger,swaggerOptions)

routes.forEach((route,index)=>{
    app.route(route)
})

const startServer=async ()=>{
    try{
        await app.listen(3000)
        app.swagger()
        app.log.info(`server is running on ${app.server.address()}`)
    }catch (err){
        console.log(err)
        process.exit(1)
    }
}
startServer()