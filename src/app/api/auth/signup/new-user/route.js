import connectDB from "@/lib/connectDB"

export const POST=async(request)=>{
    try{
const db =await connectDB()
const userConnection=db.collection('users')
const newUser=await request.json()
const res= await userConnection.insertOne(newUser)
console.log('new user info', res)
 return  Response.json({message:'new user created'})
    }
    catch(error){
        console.log(error)
        return Response.json({message:'something went wrong'})
    }
}