
import dotenv from 'dotenv'
import connectDb from './db/dbConnection.js'
import app from './app.js'
dotenv.config({
    path:'./env'
})

const port = process.env.PORT || 6000

connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening at port http://localhost:${port}`)
    })
    app.on("error",()=>{
        console.log("Error",error)
        throw error
       })
})
.catch((error)=>{
    console.log('MongoDb connection error',error)
})